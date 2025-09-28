import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-resume-du-tour-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ labels.menu.resumeTour }}</h1>
    <div [innerHTML]="content.html"></div>
  `
})
export class ResumeDuTourPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  content = this.lang.data.RESUME_TOUR;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.content = this.lang.data.RESUME_TOUR;
    });
  }
}
