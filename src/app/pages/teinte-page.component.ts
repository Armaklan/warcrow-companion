import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-teinte-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      .teinte-table { width: 100%; border-collapse: collapse; margin: 12px 0 24px; }
      .teinte-table th, .teinte-table td { padding: 12px 14px; line-height: 1.5; vertical-align: top; }
      .teinte-table thead th { text-align: center; background: #f8f9fa; color: #333; font-weight: 600; }
      .teinte-table tbody tr + tr td { border-top: 1px solid #e0e0e0; }
      .teinte-table tbody tr:nth-child(even) { background: #fcfcfc; }
      .teinte-table tbody td:first-child, .teinte-table thead th:first-child { text-align: center; white-space: nowrap; width: 5rem; font-weight: 600; }
      .teinte-table img { height: 1em; vertical-align: -0.2em; }
      @media (max-width: 600px) {
        .teinte-table th, .teinte-table td { padding: 8px 10px; }
      }
    </style>
    <h1>{{ labels.menu.teinte }}</h1>
    <div [innerHTML]="content.html"></div>
  `
})
export class TeintePageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  content = this.lang.data.TEINTE_PAGE;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.content = this.lang.data.TEINTE_PAGE;
    });
  }
}
