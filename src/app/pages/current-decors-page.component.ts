import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../shared/language.service';
import { CollapsibleListComponent } from '../components/collapsible-list.component';

@Component({
  selector: 'app-current-decors-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterLink, CollapsibleListComponent],
  template: `
    <style>
      .decors-table { width: 100%; border-collapse: collapse; margin: 12px 0 24px; }
      .decors-table th, .decors-table td { padding: 12px 14px; line-height: 1.5; vertical-align: top; word-break: break-word; overflow-wrap: anywhere; hyphens: auto; }
      .decors-table thead th { text-align: left; background: #f8f9fa; color: #333; font-weight: 600; }
      .decors-table tbody tr + tr td { border-top: 1px solid #e0e0e0; }
      .decors-table tbody tr:nth-child(even) { background: #fcfcfc; }
      .keywords { display: inline; }
      .keywords .kw + .kw:before { content: ', '; }
      .kw img { height: 1em; vertical-align: -0.2em; }

      .filter-bar { margin: 12px 0 16px; }
      .filter-bar input { width: 100%; max-width: 480px; padding: 8px 12px; font-size: 16px; }

      .tab-content { padding: 16px 0; }

      @media (max-width: 720px) {
        .decors-table { border-collapse: separate; border-spacing: 0; }
        .decors-table thead { display: none; }
        .decors-table, .decors-table tbody, .decors-table tr, .decors-table td { display: block; width: 100%; }
        .decors-table tbody tr { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; margin: 12px 0; padding: 4px 0; }
        .decors-table tbody tr:nth-child(even) { background: #fff; }
        .decors-table tbody tr + tr td { border-top: none; }
        .decors-table td { padding: 8px 12px; }
        .decors-table td:first-child { font-size: 16px; font-weight: 600; padding-top: 10px; }
        .decors-table td[data-label]::before {
          content: attr(data-label);
          display: block;
          font-size: 12px;
          color: #666;
          margin-bottom: 4px;
          font-weight: 600;
        }
      }
    </style>

    <h1>{{ labels.menu.currentDecors }}</h1>

    <mat-tab-group [(selectedIndex)]="selectedIndex">
      <mat-tab [label]="labels.menu.motsClefsDecors">
        <div class="tab-content">
          <div class="filter-bar">
            <input
              type="search"
              placeholder="Filtrer par titre..."
              (input)="onFilterInput($event)"
              [value]="filterText"
              aria-label="Filtrer les mots-clefs de décors par titre"
            />
          </div>
          <app-collapsible-list [items]="filteredKeywords" [selectedId]="openId"></app-collapsible-list>
        </div>
      </mat-tab>
      <mat-tab [label]="labels.menu.decors">
        <div class="tab-content">
          <table class="decors-table">
            <thead>
              <tr>
                <th>{{ labels.terrain.name }}</th>
                <th>{{ labels.terrain.keywords }}</th>
                <th>{{ labels.terrain.size }}</th>
              </tr>
            </thead>
            <tbody>
              @for (d of decorsSorted; track d.title) {
                <tr [attr.id]="slug(d.title)">
                  <td><strong>{{ d.title }}</strong></td>
                  <td [attr.data-label]="labels.terrain.keywords">
                    <span class="keywords">
                      @for (kw of d.keywords; track $index) {
                        <span class="kw">
                          <a href (click)="selectKeyword(kw.name); $event.preventDefault()">{{ kw.name }}</a>
                          @if (kw.value) { (<span [innerHTML]="kw.value"></span>) }
                        </span>
                      }
                    </span>
                  </td>
                  <td [attr.data-label]="labels.terrain.size">{{ d.dimensions }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class CurrentDecorsPageComponent implements OnInit {
  lang = inject(LanguageService);
  route = inject(ActivatedRoute);

  labels = this.lang.data.LABEL;
  decors = this.lang.data.DECORS;
  keywords = this.lang.data.MOTS_CLEFS_DECORS;

  filterText = '';
  openId: string | null = null;
  selectedIndex = 0;

  ngOnInit() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.decors = this.lang.data.DECORS;
      this.keywords = this.lang.data.MOTS_CLEFS_DECORS;
    });

    this.route.queryParamMap.subscribe(pm => {
      const q = (pm.get('q') ?? '').trim();
      if (q) {
        this.filterText = q;
        this.selectedIndex = 0;
      }
      this.openId = pm.get('open');
      const tab = pm.get('tab');
      if (tab === 'decors') {
        this.selectedIndex = 1;
      } else if (tab === 'keywords') {
        this.selectedIndex = 0;
      }

      if (this.openId && this.selectedIndex === 1) {
         setTimeout(() => {
          const el = document.getElementById(this.openId!);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    });
  }

  get filteredKeywords() {
    const q = this.filterText.toLowerCase().trim();
    if (!q) return this.keywords;
    return this.keywords.filter(i => i.title.toLowerCase().includes(q));
  }

  get decorsSorted() {
    return [...this.decors].sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
  }

  onFilterInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.filterText = target?.value ?? '';
  }

  selectKeyword(name: string) {
    this.filterText = name;
    this.selectedIndex = 0;
  }

  slug(text: string): string {
    return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}+/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
