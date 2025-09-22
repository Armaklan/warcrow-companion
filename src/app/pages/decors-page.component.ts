import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DECORS } from '../shared/data';

@Component({
  selector: 'app-decors-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      .decors-table { width: 100%; border-collapse: collapse; margin: 12px 0 24px; }
      .decors-table th, .decors-table td { padding: 12px 14px; line-height: 1.5; vertical-align: top; }
      .decors-table thead th { text-align: left; background: #f8f9fa; color: #333; font-weight: 600; }
      .decors-table tbody tr + tr td { border-top: 1px solid #e0e0e0; }
      .decors-table tbody tr:nth-child(even) { background: #fcfcfc; }
      .keywords { display: inline; }
      .keywords .kw + .kw:before { content: ', '; }
      .kw img { height: 1em; vertical-align: -0.2em; }
      @media (max-width: 600px) {
        .decors-table th, .decors-table td { padding: 8px 10px; }
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
            <td>
              <span class="keywords">
                @for (kw of d.keywords; track $index) {
                  <span class="kw">
                    <span>{{ kw.name }}</span>
                    @if (kw.value) { (<span [innerHTML]="kw.value"></span>) }
                  </span>
                }
              </span>
            </td>
            <td>{{ d.dimensions }}</td>
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
