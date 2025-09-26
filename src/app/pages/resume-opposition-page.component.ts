import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-opposition-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Résumé d'une opposition</h1>
    <ol>
      <li><b>Rassemblez vos dés respectifs.</b> En cas d'attaque à distance, le défenseur ne peut pas utiliser de dé d'attaque (rouge, orange, jaune).</li>
      <li>Si une règle ou un effet vous permet d’ajouter des dés ou vous oblige à en retirer, faites-le maintenant. C'est le moment d'appliquer les états.</li>
      <li><b>Lancez les dés</b> en même temps.</li>
      <li><b>Ajoutez les symboles automatiques</b> à vos jets, s’il y en a.</li>
      <li><b>Variations du joueur actif.</b> Le joueur dont l’activation est en cours peut dépenser autant de symboles obtenus qu’il souhaite pour appliquer
        autant de ses variations disponibles pour ce jet.</li>
      <li><b>Variation du second joueur. </b>Son adversaire a ensuite la même opportunité.</li>
      <li><b>Résolution.</b> Annulez autant de <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> du jet de votre adversaire qu’il
        vous reste de <span class="warcrow-font-Block" role="img" aria-label="Block" ></span>.
        Et vice versa, votre adversaire annule autant de vos <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> qu’il dispose de
        <span class="warcrow-font-Block" role="img" aria-label="Block" ></span> restants. Vous et votre adversaire pouvez alors appliquer les
        effets découlant activés par les symboles restants dans vos jets.</li>
      <li>S'il s'agit d'un combat, l'unité qui a subis le plus de <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> est l'unité défaites et devient stressés. Elle peut être forcé au repli (voir action "Attaquer").</li>
      <li>En fin d'activation seulement, les états qui ont fait effet sont retiré.</li>
    </ol>
  `
})
export class ResumeOppositionPageComponent {}
