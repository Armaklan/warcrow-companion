import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personnage-et-unite-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Personnages et unités</h1>

    <h3>Rejoindre une unité durant l'activation</h3>
    <p>Pendant son activation, votre Personnage peut intégrer
    une unité qui remplit les conditions de son mot-clé
    Rejoindre tant que :</p>
    <ul>
      <li>Il n’y a pas d’autres Personnages dans l’unité.</li>
      <li>L’unité n’est pas démoralisée.</li>
    </ul>

    <p>La seule action que peut accomplir votre personnage est de se déplacer, jusqu'à 2 fois, pour rejoindre l'unité.
      Concernant les jetons et dommages : </p>
    <ul>
      <li><b>Déĝats :</b>Le personnage conserve ses jetons de dégâts sur son propre profil. L'unité ne prend pas en compte
        les dégâts du personnages.
      </li>
      <li><b>Stress :</b>Conservez le niveau de stress le plus élevé entre l'unité et le personnage.</li>
      <li><b>Etats : </b>Les jetons états sont transférés sur l'unité. Retirez les états éventuellement en double.</li>
      <li><b>Effets : </b>Transférez les jetons effets à l'unités.</li>
      <li><b>Activation : </b>Retirez le jeton d'activation du personnage.</li>
      <li><b>Teinte : </b>Comparer la teinte du personnage et de l'unité. L'unité garde la valeur la plus elevée.</li>
    </ul>
    <h3>Quitter une unité</h3>
    <p>Déclarer à votre adversaire que votre personnage quitte l'unité. A cet instant le personne ne fait plus partie de l'unité.
      Occupez-vous de la répartition des jetons.</p>
    <ul>
      <li><b>Déĝats :</b> L'unité conserve tous les jetons de dégâts, sauf ceux directement présent sur le profil du personnage.
      </li>
      <li><b>Stress :</b>Le personnage reçoit autant de jeton de stress que l'unité.</li>
      <li><b>Etats : </b>Le personnage reçoit les mêmes états que l'unité.</li>
      <li><b>Effets : </b>Le personnage conserve tous les jetons d'effet.</li>
      <li><b>Teinte : </b>Le personnage reçoit le même nombre de jetons teinte que l'unité.</li>
      <li><b>Démoralisé :</b>Si l'unité était démoralisé, le personnage reçoit son propre jeton démoralisé à la même position.</li>
    </ul>
    <p>Activez ensuite votre personnage.</p>
    <p>Si le personnage était un officier, le leader de l'unité prend la place que le personnage occupais au début de l'activation.</p>
    <p>Un personnage ne peut quitter et rejoindre une unité au cours d'une même activation.</p>
    <p>Un personnage ne peut quitter une unité occupé en combat.</p>
  `,
})
export class PersonnageEtUnitePageComponent {}
