import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
