import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {Feat, Scenario} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-scenarios-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatGridListModule, MatIconModule],
  template: `
    <h1>{{ labels.menu.scenarios }}</h1>

    @if (!scenarios || scenarios.length === 0) {
      <p>Aucun scénario disponible pour le moment.</p>
    } @else {
      <div class="grid">
        <a class="card-link" *ngFor="let s of scenarios; let i = index" [routerLink]="['/scenarios', i]">
          <mat-card class="scenario-card" appearance="outlined">
            <div class="thumb" aria-hidden="true">
              @if (s.image) {
                <img [src]="s.image" alt="{{s.title}}" />
              } @else {
                <mat-icon>image</mat-icon>
              }
            </div>
            <div class="title">{{ s.title }}</div>
          </mat-card>
        </a>
      </div>
    }

    <h1>{{ labels.menu.feats }}</h1>
    @if (!feats || feats.length === 0) {
      <p>Aucun exploit disponible pour le moment.</p>
    } @else {
      <div class="grid">
        <a class="card-link" *ngFor="let f of feats; let i = index" [routerLink]="['/feats', i]">
          <mat-card class="scenario-card" appearance="outlined">
            <div class="thumb" aria-hidden="true">
              <mat-icon>emoji_events</mat-icon>
            </div>
            <div class="title">{{ f.title }}</div>
          </mat-card>
        </a>
      </div>
    }
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 12px;
    }
    .card-link { text-decoration: none; color: inherit; }
    .scenario-card { display: flex; align-items: center; gap: 12px; padding: 8px; }
    .thumb { width: 256px; height: 256px; display: grid; place-items: center; overflow: hidden; border-radius: 4px; background: #f5f5f5; }
    .thumb img { width: 100%; height: 100%; object-fit: cover; }
    .title { font-weight: 600; }
  `]
})
export class ScenariosPageComponent {
  lang = inject(LanguageService);
  scenarios: Scenario[] = this.lang.data.SCENARIO;
  feats: Feat[] = this.lang.data.FEAT;
  labels = this.lang.data.LABEL;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.scenarios = this.lang.data.SCENARIO;
      this.feats = this.lang.data.FEAT;
      this.labels = this.lang.data.LABEL;
    });
  }
}
