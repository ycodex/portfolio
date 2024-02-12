# Cloudformation for API Gateway

Lets got through the Cloudformation for creating API gateway in AWS
Here I'm taking an example of an API which has a passthrough behavior

```yaml
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::LanguageExtensions
Description: CF template

Parameters:
  ApplicationName:
    Type: String
    Description: Name of API
  VPCE:
    Type: String
    Description: Private VPCE
  BackendURL:
    Type: String
    Description: Backend URL
  LoggingLevel:
    Type: String
    Description: Logging level for Cloudwatch Logs. Values-  OFF ERROR INFO
    AllowedValues:
      - OFF
      - ERROR
      - INFO

Resources:
  ProxyRestAPI: #resource creates a REST API
    Type: "AWS::ApiGateway::RestApi"
    Properties:
      Name: !Ref ApplicationName
      Description: RestApi
      DisableExecuteApiEndpoint: true
      EndpointConfiguration:
        Types:
          - PRIVATE
        VpcEndpointIds:
          - !Ref VPCE

      Policy:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal: "*"
            Action: execute-api:Invoke
            Resource: "execute-api:/*"
          - Effect: Deny
            Principal: "*"
            Action: execute-api:Invoke
            Resource: "execute-api:/*"
            Condition:
              StringNotEquals:
                aws:SourceVpce: !Ref VPCE

  "Fn::ForEach::BaseMethod":
    - Identifier
    - [GET, PUT, POST, DELETE]
    - "BaseMethod${Identifier}":
        Type: "AWS::ApiGateway::Method" #resource creates API Gateway methods that define the parameters and body that clients must send in their requests
        Properties:
          HttpMethod: !Ref Identifier
          ResourceId: !GetAtt ProxyRestAPI.RootResourceId #Reference to the restapi resource
          RestApiId: !Ref ProxyRestAPI #Reference to the restapi
          AuthorizationType: NONE
          RequestParameters:
            method.request.path.proxy: true
          Integration:
            RequestParameters:
              integration.request.path.proxy: "method.request.path.proxy"
            IntegrationHttpMethod: ANY
            Type: HTTP_PROXY
            Uri: !Sub ${BackendURL}
            IntegrationResponses:
              - StatusCode: "200"

  ProxyPassResource: #creates a proxy pass resource in an API
    Type: "AWS::ApiGateway::Resource"
    Properties:
      ParentId: !GetAtt ProxyRestAPI.RootResourceId #Reference to the restapi id
      RestApiId: !Ref ProxyRestAPI #Reference to the restapi
      PathPart: "{proxy+}"

  "Fn::ForEach::ProxyMethod":
    - Identifier
    - [GET, PUT, POST, DELETE]
    - "ProxyMethod${Identifier}":
        Type: "AWS::ApiGateway::Method" #resource creates API Gateway methods that define the parameters and body that clients must send in their requests
        Properties:
          HttpMethod: !Ref Identifier
          ResourceId: !Ref ProxyPassResource #Reference to the restapi resource
          RestApiId: !Ref ProxyRestAPI #Reference to the restapi
          AuthorizationType: NONE
          RequestParameters:
            method.request.path.proxy: true
          Integration:
            RequestParameters:
              integration.request.path.proxy: "method.request.path.proxy"
            IntegrationHttpMethod: ANY
            Type: HTTP_PROXY
            Uri: !Sub ${BackendURL}/{proxy}
            IntegrationResponses:
              - StatusCode: "200"

  LogGroup:
    Type: "AWS::Logs::LogGroup" #resource creates a log group
    Properties:
      LogGroupName: !Ref ApplicationName

  ProxyDeployment: #resource deploys an API Gateway RestApi resource to a stage
    Type: AWS::ApiGateway::Deployment
    DependsOn:
      [
        BaseMethodGET,
        BaseMethodPOST,
        BaseMethodPUT,
        BaseMethodDELETE,
        ProxyMethodGET,
        ProxyMethodPOST,
        ProxyMethodPUT,
        ProxyMethodDELETE,
      ]
    Properties:
      RestApiId: !Ref ProxyRestAPI

  ProxyStage:
    Type: AWS::ApiGateway::Stage #resource creates a stage for a deployment
    Properties:
      RestApiId: !Ref ProxyRestAPI
      StageName: Dev
      DeploymentId: !Ref ProxyDeployment
      MethodSettings:
        - HttpMethod: "*"
          ResourcePath: "/*"
          LoggingLevel: !Ref LoggingLevel #cloudwatch logs log level
          DataTraceEnabled: false
      AccessLogSetting: #access log settings
        DestinationArn: !GetAtt LogGroup.Arn
        Format:
          Fn::Sub:
            - "${Format}"
            - Format: !Ref AccessLogFormat
              ApplicationName: !Ref ApplicationName
              Version: !Ref Version

  APIMapping:
    Type: AWS::ApiGatewayV2::ApiMapping
    DependsOn: ProxyStage
    Properties:
      ApiId: !Ref ProxyRestAPI
      ApiMappingKey: "api/v1"
      DomainName: !Ref DomainName
      Stage: !Ref EnvironmentName

Outputs:
  ApiGatewayId:
    Value: !Sub ${ProxyRestAPI}
    Export:
      Name: !Sub ${ApplicationName}-API-ID


```