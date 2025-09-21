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
              L'unité est stressé et encaisse <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/>.
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
            <p>Lancez 1 <img src="de-o.png" alt="dé orange" style="height: 1em; vertical-align: -0.2em;"/> et appliquez les effets qui correspondent exactement au résultat obtenu :</p>
            <ul>
              <li><img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> : Devenir stressé</li>
              <li><img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> <img src="alert.png" alt="alert" style="height: 1em; vertical-align: -0.2em;"/> : Recevoir <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/></li>
              <li><img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> <img src="alert-hollow.png" alt="alert-hollow" style="height: 1em; vertical-align: -0.2em;"/> : Recevoir l'état Ralenti</li>
              <li><img src="success-hollow.png" alt="succès hollow" style="height: 1em; vertical-align: -0.2em;"/> <img src="alert.png" alt="alert" style="height: 1em; vertical-align: -0.2em;"/> : Déplacer (3)</li>
              <li><img src="alert.png" alt="alert" style="height: 1em; vertical-align: -0.2em;"/> : Soigner <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/></li>
              <li><img src="alert-hollow.png" alt="alert-hollow" style="height: 1em; vertical-align: -0.2em;"/> : Souffrir <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/></li>
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
