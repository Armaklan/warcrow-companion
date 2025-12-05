import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Feat, Scenario} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-scenarios-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatGridListModule, MatIconModule, MatButtonModule],
  template: `
    <h1>{{ labels.menu.scenarios }}</h1>

    <p>
      <button mat-raised-button color="primary" (click)="goRandom()">
        <mat-icon>shuffle</mat-icon>
        {{ labels.scenario.random || 'Aléatoire' }}
      </button>
      @if (lastRandom && lastScenarioTitle && lastFeatTitle) {
        <a class="last-random-link" mat-stroked-button [routerLink]="['/scenarios','random', lastRandom.sid, lastRandom.fid]">
          <mat-icon>history</mat-icon>
          {{ lastScenarioTitle }} + {{ lastFeatTitle }}
        </a>
      }
    </p>

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
  private router = inject(Router);
  private static readonly LAST_RANDOM_KEY = 'wc:lastRandom';
  lastRandom: { sid: number; fid: number } | null = null;
  lastScenarioTitle = '';
  lastFeatTitle = '';

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.scenarios = this.lang.data.SCENARIO;
      this.feats = this.lang.data.FEAT;
      this.labels = this.lang.data.LABEL;
      // Recalcule les titres pour le dernier tirage si présent
      this.refreshLastRandomTitles();
    });
    // Chargement initial du dernier tirage
    this.loadLastRandomFromStorage();
    this.refreshLastRandomTitles();
  }

  goRandom() {
    const scenarios = this.lang.data.SCENARIO;
    const feats = this.lang.data.FEAT;
    if (!scenarios?.length || !feats?.length) { return; }
    const sid = Math.floor(Math.random() * scenarios.length);
    const fid = Math.floor(Math.random() * feats.length);
    // Mémorise le tirage en localStorage
    try {
      const payload = JSON.stringify({ sid, fid });
      localStorage.setItem(ScenariosPageComponent.LAST_RANDOM_KEY, payload);
      this.lastRandom = { sid, fid };
      this.refreshLastRandomTitles();
    } catch {
      // ignore storage errors
    }
    this.router.navigate(['/scenarios', 'random', sid, fid]);
  }

  private loadLastRandomFromStorage() {
    try {
      const raw = localStorage.getItem(ScenariosPageComponent.LAST_RANDOM_KEY);
      if (!raw) { this.lastRandom = null; return; }
      const parsed = JSON.parse(raw) as { sid?: number; fid?: number } | null;
      if (!parsed || typeof parsed.sid !== 'number' || typeof parsed.fid !== 'number') {
        this.lastRandom = null; return;
      }
      this.lastRandom = { sid: parsed.sid, fid: parsed.fid };
    } catch {
      this.lastRandom = null;
    }
  }

  private refreshLastRandomTitles() {
    if (!this.lastRandom) { this.lastScenarioTitle = ''; this.lastFeatTitle = ''; return; }
    const { sid, fid } = this.lastRandom;
    const sList = this.lang.data.SCENARIO;
    const fList = this.lang.data.FEAT;
    const validS = Number.isInteger(sid) && sid >= 0 && sid < sList.length;
    const validF = Number.isInteger(fid) && fid >= 0 && fid < fList.length;
    if (!validS || !validF) { this.lastScenarioTitle = ''; this.lastFeatTitle = ''; return; }
    this.lastScenarioTitle = sList[sid]?.title || '';
    this.lastFeatTitle = fList[fid]?.title || '';
  }
}
