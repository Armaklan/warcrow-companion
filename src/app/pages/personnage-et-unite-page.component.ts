import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-personnage-et-unite-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ labels.menu.personnageUnite }}</h1>
    <div [innerHTML]="content.html"></div>
  `,
})
export class PersonnageEtUnitePageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  content = this.lang.data.PERSONNAGE_UNITE;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.content = this.lang.data.PERSONNAGE_UNITE;
    });
  }
}
