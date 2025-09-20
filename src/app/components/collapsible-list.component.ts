import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

export interface CollapsibleItem { title: string; details: string; icon?: string; }

@Component({
  selector: 'app-collapsible-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  template: `
    <mat-accordion>
      @for (item of items; track $index) {
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <span class="header-content">
              @if (item.icon) { <img [src]="item.icon" alt="" class="item-icon" /> }
              <span>{{ item.title }}</span>
            </span>
          </mat-expansion-panel-header>
          <p [innerHTML]="item.details">    </p>
        </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styles: [
    `.header-content { display: inline-flex; align-items: center; gap: 16px; }`,
    `.item-icon { width: 40px; height: 40px; object-fit: contain; }`
  ]
})
export class CollapsibleListComponent {
  @Input() items: CollapsibleItem[] = [];
}
