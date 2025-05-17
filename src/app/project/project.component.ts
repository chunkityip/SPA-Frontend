import { Component, OnInit } from '@angular/core';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectTitleComponent, TaskListComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
