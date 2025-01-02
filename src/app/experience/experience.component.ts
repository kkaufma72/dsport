
// Example for AboutComponent (the same applies to Projects and Experience)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor, *ngIf

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true,  // Mark AboutComponent as standalone
  imports: [CommonModule]  // Import CommonModule here
})
export class ExperienceComponent {}
