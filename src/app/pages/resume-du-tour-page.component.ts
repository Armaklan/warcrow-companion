import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-du-tour-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Résumé du tour</h1>
    <h2>Début de la manche</h2>
    <ol>
      <li>Celui qui a l'initiative choisit qui joue en premier pendant cette manche.</li>
      <li>Vérifier les effets de la teinte.</li>
    </ol>
    <h2>Phase du tour</h2>
    <ol>
      <li>
        <p>La premier jour active une de ses unités</p>
        <ul>
          <li>L'unité peut effectuer 2 actions simples différentes, ou une action longue.</li>
          <li>Si l'unité a déjà été activé durant le tour, elle est stressé.</li>
          <li>A la fin de l'activation, vérifier le contrôle des objectifs.</li>
        </ul>
      </li>
      <li>
        Le second joueur active une de ses unités en suivant le même processus.
      </li>
      <li>Résolvez les jetons d'évènements et terminez le tour.</li>
      <li>Répétez la séquence jusqu'à ce que le dernier tour de la manche soit joué.</li>
    </ol>
    <h2>Fin de la manche</h2>
    <ol>
      <li>Appliquez les effets de "fin de manche".</li>
      <li>Obtenez vos points de victoire (PV)</li>
      <li>
        <p>Réduisez le stress de vos unités (sauf les unités démoralisées) : </p>
        <ul>
          <li>de 1 si l'unité a été activée durant cette manche.</li>
          <li>de 2 si l'unité n'a pas été activée durant cette manche.</li>
        </ul>
      </li>
      <li><b>Personne n'est laissé pour compte.</b> Les unités non activée, non démoralisée, et non engagées peuvent se déplacer.</li>
      <li>Retirez les jetons d'activation.</li>
      <li>
        <p>L'initiative change de main.</p>
        <ul>
          <li>Le joueur ayant le moins de points de victoire prend l'initative.</li>
          <li>En cas d'égalité, l'initiative change de joueur.</li>
        </ul>
      </li>
      <li>Avancez le jeton de fin de manche selon les conditions du scénario.</li>
    </ol>
    <p>Cette page sera bientôt renseignée.</p>
  `
})
export class ResumeDuTourPageComponent {}
