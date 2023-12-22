import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicInfoComponent } from './components/main/basic-info/basic-info.component';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/main/skills/skills.component';
import { ContactComponent } from './components/main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicInfoComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
