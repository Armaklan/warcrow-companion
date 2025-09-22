import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DECORS } from '../shared/data';

@Component({
  selector: 'app-decors-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

      /* Layout mobile: on empile les infos au lieu d'afficher en colonnes */
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

    <h1>Décors</h1>

    <table class="decors-table">
      <thead>
        <tr>
          <th>Décors</th>
          <th>Mots‑clef</th>
          <th>Dimensions</th>
        </tr>
      </thead>
      <tbody>
        @for (d of decorsSorted; track d.title) {
          <tr>
            <td><strong>{{ d.title }}</strong></td>
            <td [attr.data-label]="'Mots‑clef'">
              <span class="keywords">
                @for (kw of d.keywords; track $index) {
                  <span class="kw">
                    <a [routerLink]="'/mots-clefs-decors'" [queryParams]="{ q: kw.name }">{{ kw.name }}</a>
                    @if (kw.value) { (<span [innerHTML]="kw.value"></span>) }
                  </span>
                }
              </span>
            </td>
            <td [attr.data-label]="'Dimensions'">{{ d.dimensions }}</td>
          </tr>
        }
      </tbody>
    </table>
  `
})
export class DecorsPageComponent {
  decors = DECORS;

  get decorsSorted() {
    return [...this.decors].sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
  }
}
