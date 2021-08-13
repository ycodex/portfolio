import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [AppComponent, HomeComponent, BlogComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
