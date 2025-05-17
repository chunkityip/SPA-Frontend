import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectTitleComponent } from './Project/project-title/project-title.component';
import { TaskListComponent } from './Project/task-list/task-list.component';
import { ProgressBarComponent } from './Project/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    ProjectTitleComponent,
    TaskListComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
