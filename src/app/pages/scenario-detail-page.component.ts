import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FR } from '../shared/data.fr';
import {Scenario} from '../shared/data.model';

@Component({
  selector: 'app-scenario-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <a mat-button color="primary" routerLink="/scenarios">
      <mat-icon>arrow_back</mat-icon>
      Retour</a>

    @if (!scenario) {
      <h1>Scénario introuvable</h1>
      <p>Le scénario demandé n'existe pas.</p>
    } @else {
      <h1>{{ scenario.title }}</h1>
      @if (scenario.image) {
        <div class="image-wrapper">
          <img [src]="scenario.image" alt="{{scenario.title}}"/>
        </div>
      }

      <section class="block" *ngIf="scenario.requiredMaterial?.length">
        <h2>Matériel requis</h2>
        <ul>
          <li *ngFor="let item of scenario.requiredMaterial">{{ item }}</li>
        </ul>
      </section>

      <section class="block">
        <h2>Durée d'un round</h2>
        <p>Un round dure {{ scenario.roundLength }} tours.</p>
      </section>

      <section class="block" *ngIf="scenario.endRoundScoring?.length">
        <h2>Score</h2>
        <p>A la fin de chaque round, chaque compagnie obtient :</p>
        <ul>
          <li *ngFor="let s of scenario.endRoundScoring">{{ s }}</li>
        </ul>
      </section>

      <section class="block">
        <h2>Fin de partie</h2>
        <p>La partie se termine au bout de {{ scenario.endGame }} rounds.</p>
      </section>

      @if (scenario.additionnal) {
        <section class="block">
          <div class="additionnal" [innerHTML]="scenario.additionnal"></div>
        </section>
      }

    }
  `,
  styles: [`
    .image-wrapper { max-width: 650px; margin: 8px 0 16px; }
    .image-wrapper img { width: 100%; height: auto; border-radius: 4px; }
    .description :where(p, ul, ol) { line-height: 1.6; }
  `]
})
export class ScenarioDetailPageComponent {
  scenario?: Scenario;

  constructor(route: ActivatedRoute) {
    const idParam = route.snapshot.paramMap.get('id');
    const idx = idParam ? Number(idParam) : NaN;
    if (!Number.isNaN(idx) && idx >= 0 && idx < FR.SCENARIO.length) {
      this.scenario = FR.SCENARIO[idx];
    }
  }
}
