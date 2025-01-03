import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeProject: string = 'project1';

  setActiveProject(project: string) {
    this.activeProject = project;
  }
}
