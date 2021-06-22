import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { WebServiceComponent } from "./components/web-service/web-service.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { JobComponent } from "./components/experience/job/job.component";
import { SemesterComponent } from "./components/education/semester/semester.component";
import { CourseComponent } from "./components/education/semester/course/course.component";
import { ProjComponent } from "./components/projects/proj/proj.component";
import { InstagramComponent } from "./components/instagram/instagram.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StorageServiceModule } from "angular-webstorage-service";
import { NavComponent } from "./components/shared/nav/nav.component";

import { SanitizeHtmlPipe } from "./pipes/sanitize-html.pipe";
import { SkillComponent } from "./components/skills/skill/skill.component";
import { SareeComponent } from "./components/templates/saree/saree.component";
import { SareeCardComponent } from "./components/templates/saree/saree-card/saree-card.component";
import { TemplateSectComponent } from "./components/templates/template-sect/template-sect.component";
import { TemplateCardsComponent } from "./components/templates/template-sect/template-cards/template-cards.component";
import { DecorComponent } from "./components/templates/decor/decor.component";
import { ChessPageComponent } from "./components/chess-ai/chess-page/chess-page.component";
import { NgxChessBoardModule } from "ngx-chess-board";
import { NavCircleComponent } from './components/main/nav-circle/nav-circle.component';
import { SanitizeStylePipe } from './pipes/sanitize-style.pipe';
import { SidesComponent } from './components/sides/sides.component';
import { SideComponent } from './components/sides/side/side.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WebServiceComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    JobComponent,
    SemesterComponent,
    CourseComponent,
    ProjComponent,
    InstagramComponent,
    NavComponent,
    SanitizeHtmlPipe,
    SkillComponent,
    SareeComponent,
    SareeCardComponent,
    TemplateSectComponent,
    TemplateCardsComponent,
    DecorComponent,
    ChessPageComponent,
    NavCircleComponent,
    SanitizeStylePipe,
    SidesComponent,
    SideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    NgxChessBoardModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
