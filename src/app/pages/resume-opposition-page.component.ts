import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-resume-opposition-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ labels.menu.resumeOpposition }}</h1>
    <div [innerHTML]="content.html"></div>
  `
})
export class ResumeOppositionPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  content = this.lang.data.RESUME_OPPOSITION;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.content = this.lang.data.RESUME_OPPOSITION;
    });
  }
}
