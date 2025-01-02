import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';  // Import AboutComponent
import { ProjectsComponent } from './projects/projects.component';  // Import ProjectsComponent
import { ExperienceComponent } from './experience/experience.component';  // Import ExperienceComponent
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf, *ngFor, ngClass

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Mark AppComponent as standalone
  imports: [          // Import the standalone components and CommonModule here
    CommonModule,     // Import CommonModule for directives like *ngFor, *ngIf
    AboutComponent,   // Import AboutComponent (which should be marked standalone)
    ProjectsComponent, // Import ProjectsComponent (which should be marked standalone)
    ExperienceComponent // Import ExperienceComponent (which should be marked standalone)
  ]
})
export class AppComponent {
  selectedTabIndex = 0;
  tabs = [
    { title: 'About' },
    { title: 'Projects' },
    { title: 'Experience' }
  ];

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
}

