import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Feat} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-feat-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <a mat-button color="primary" routerLink="/scenarios">
      <mat-icon>arrow_back</mat-icon>
      {{ labels.scenario.back }}</a>

    @if (!feat) {
      <h1>Not found</h1>
    } @else {
      <h1>{{ feat.title }}</h1>

      <section class="block" *ngIf="feat.requiredMaterial?.length">
        <h2>{{ labels.scenario.material }}</h2>
        <ul>
          <li *ngFor="let item of feat.requiredMaterial">{{ item }}</li>
        </ul>
      </section>

      <section class="block" *ngIf="feat.scoring">
        <h2>{{ labels.scenario.score.title }}</h2>
        <div class="additionnal" [innerHTML]="feat.scoring"></div>
      </section>

      @if (feat.additionnal) {
        <section class="block">
          <div class="additionnal" [innerHTML]="feat.additionnal"></div>
        </section>
      }
    }
  `,
  styles: [`
    .description :where(p, ul, ol) { line-height: 1.6; }
  `]
})
export class FeatDetailPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  feat?: Feat;
  private idx: number | null = null;

  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const idx = idParam ? Number(idParam) : NaN;
    this.idx = !Number.isNaN(idx) && idx >= 0 ? idx : null;
    this.refresh();
    this.lang.langChanges.subscribe(() => this.refresh());
  }

  private refresh() {
    if (this.idx === null) { this.feat = undefined; return; }
    const list = this.lang.data.FEAT;
    this.feat = (this.idx >= 0 && this.idx < list.length) ? list[this.idx] : undefined;
  }
}
