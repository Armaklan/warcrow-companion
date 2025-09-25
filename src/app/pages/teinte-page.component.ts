import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teinte-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      .teinte-table { width: 100%; border-collapse: collapse; margin: 12px 0 24px; }
      .teinte-table th, .teinte-table td { padding: 12px 14px; line-height: 1.5; vertical-align: top; }
      .teinte-table thead th { text-align: center; background: #f8f9fa; color: #333; font-weight: 600; }
      /* Simple border between body rows */
      .teinte-table tbody tr + tr td { border-top: 1px solid #e0e0e0; }
      /* Subtle zebra striping */
      .teinte-table tbody tr:nth-child(even) { background: #fcfcfc; }
      /* First column compact and centered */
      .teinte-table tbody td:first-child, .teinte-table thead th:first-child { text-align: center; white-space: nowrap; width: 5rem; font-weight: 600; }
      /* Ensure icons align nicely in text */
      .teinte-table img { height: 1em; vertical-align: -0.2em; }
      @media (max-width: 600px) {
        .teinte-table th, .teinte-table td { padding: 8px 10px; }
      }
    </style>
    <h1>Effet de la teinte</h1>

    <section>
      <h2>Tableau des effets</h2>
      <table class="teinte-table">
        <thead>
          <tr>
            <th>Teinte</th>
            <th>Effet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-4</td>
            <td>L'unité est stressé.</td>
          </tr>
          <tr>
            <td>5-6</td>
            <td>
              L'unité est stressé et encaisse <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>.
            </td>
          </tr>
          <tr>
            <td>7+</td>
            <td>L'unité est détruite. Toutes les unités dans les 5 pas reçoivent <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/>.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Tableau des effets pour les héritiers de Yaldabaoth</h2>
      <table class="teinte-table">
        <thead>
        <tr>
          <th>Teinte</th>
          <th>Effet</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Rien ne se passe</td>
        </tr>
        <tr>
          <td>2-7</td>
          <td>
            <p>Lancez 1 <span class="warcrow-font-Orange" role="img" aria-label="Orange Dice" ></span> et appliquez les effets qui correspondent exactement au résultat obtenu :</p>
            <ul>
              <li><span class="warcrow-font-Success" role="img" aria-label="succès" ></span> : Devenir stressé</li>
              <li><span class="warcrow-font-Success" role="img" aria-label="succès" ></span> <span class="warcrow-font-Special" role="img" aria-label="Special" ></span> : Recevoir <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/></li>
              <li><span class="warcrow-font-Success" role="img" aria-label="succès" ></span> <span class="warcrow-font-Hollow-Special" role="img" aria-label="Hollow-Special" ></span> : Recevoir l'état Ralenti</li>
              <li><span class="warcrow-font-HollowSuccess" role="img" aria-label="Succès Hollow" ></span> <span class="warcrow-font-Special" role="img" aria-label="Special" ></span> : Déplacer (3)</li>
              <li><span class="warcrow-font-Special" role="img" aria-label="Special" ></span> : Soigner <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span></li>
              <li><span class="warcrow-font-Hollow-Special" role="img" aria-label="HollowSpecial" ></span> : Souffrir <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>8+</td>
          <td>L'unité est détruite. Toutes les unités dans un rayon de 5 pas reçoivent <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/>.</td>
        </tr>
        </tbody>
      </table>
    </section>
  `
})
export class TeintePageComponent {}
