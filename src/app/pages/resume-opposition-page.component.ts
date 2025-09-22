import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-opposition-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Résumé d'une opposition</h1>
    <ol>
      <li><b>Rassemblez vos dés respectifs.</b> Si une règle ou un effet vous permet d’ajouter des dés ou vous oblige à en retirer, faites-le maintenant.</li>
      <li><b>Lancez les dés</b> en même temps.</li>
      <li><b>Ajoutez les symboles automatiques</b> à vos jets, s’il y en a.</li>
      <li><b>Variations.</b> Le joueur dont l’activation est en cours peut dépenser autant de symboles obtenus qu’il souhaite pour appliquer
        autant de ses variations disponibles pour ce jet. Son adversaire a ensuite la même opportunité (voir “Variations”).</li>
      <li><b>Résolution.</b> Annulez autant de <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> du jet de votre adversaire qu’il
        vous reste de <img src="bouclier.png" alt="bouclier" style="height: 1em; vertical-align: -0.2em;"/>.
        Et vice versa, votre adversaire annule autant de vos <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> qu’il dispose de
        <img src="bouclier.png" alt="bouclier" style="height: 1em; vertical-align: -0.2em;"/> restants. Vous et votre adversaire pouvez alors appliquer les
        effets découlant activés par les symboles restants dans vos jets.</li>
      <li>S'il s'agit d'un combat, l'unité qui a subis le plus de <img src="sang.png" alt="blessures" style="height: 1em; vertical-align: -0.2em;"/> est l'unité défaites et devient stressés. Elle peut être forcé au repli.</li>
    </ol>
  `
})
export class ResumeOppositionPageComponent {}
