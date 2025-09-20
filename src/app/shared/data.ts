export interface CollapsibleItem {
  title: string;
  details: string;
  icon?: string;
}

export const ETATS: CollapsibleItem[] = [
  {
    title: 'Effrayé', details: `<p>Quand il effectue un test de volonté, l'unité doit relancer une fois tous les dés indiquant au moins <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>.</p>
<p>Retirez cet état après avoir effectué un test de Volonté.</p>`, icon: 'effraye.png'
  },
  {
    title: 'Ralenti',
    details: `<p>
Votre unité ne peut utiliser que l'un ou l'autre de ses valeurs de mouvements (MOV) lors des actions de mouvement et d’assaut.
  De plus, vous devez soustraire 4 pas à votre mouvement de charge (min. 0).
</p>
<p><em>Exemple :</em> Si votre unité a un mouvement 3-2 (9), elle ne peut se déplacer que de 3 pas et ne peut charger que jusqu’à 5 pas.</p>
<p>Retirez cet état à la fin de l’activation durant laquelle votre unité effectue un mouvement, un assaut ou une charge.</p>`,
    icon: 'ralenti.png'
  },
  {
    title: 'Démoralisé',
    details: `<p>Si votre unité est démoralisée :</p>
  <ul>
    <li>Elle ne peut plus être activée d’aucune façon.</li>
    <li>Elle ne peut se stresser d’aucune façon et ne peut pas réduire son stress.</li>
    <li>Elle ne peut pas contrôler d’objectifs (sa valeur de conquête est nulle).</li>
    <li>Si elle participe à un combat, elle fuira toujours après le résultat (voir “Attaque de mêlée”).</li>
  </ul>

  <h3>Unité démoralisée</h3>
  <p>Si votre unité est stressée au-delà de sa valeur de MOR, vous devez effectuer un test de VOL à la fin de l’activation en cours. Si vous ne le réussissez pas, votre unité sera démoralisée et devra fuir immédiatement (voir “Fuite”).</p>`,
    icon: 'demoraliser.png'
  },
  {
    title: 'Désarmé',
    details: `<p>
Votre unité doit annuler un dé de ses jets d’attaque dans lesquels elle a obtenu au moins un symbole
<img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
</p>
<p>Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles, mais avant l’étape des variations.</p>
<p>Vous ne pouvez ajouter de variation lors de vos jets d'attaques.</p>
<p>Retirez cet état à la fin de la résolution de l'action durant laquelle vous avez subi ses effets (si vous n’avez pu annuler aucun dé, l’état persiste).</p>`,
    icon: 'desarme.png'
  },
  {
    title: 'Vulnérable', details: `<p>
    Votre unité doit annuler un dé de ses jets de défense dans lesquels elle a obtenu au moins un <img src="bouclier.png" alt="bouclier" style="height: 1em; vertical-align: -0.2em;"/>.
    Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
  </p>
  <p>
    Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles,
    mais avant l’étape des variations.
  </p>
  <p>Vous ne pouvez ajouter de variation lors de vos jets de défense.</p>
  <p>Retirez cet état à la fin de la résolution de l'action durant laquelle vous avez subi ses effets
    (si vous n’avez pu annuler aucun dé, l’état demeure actif).</p>`, icon: 'vulnerable.png'
  }
];

export const MOTS_CLEFS: CollapsibleItem[] = [
  {
    title: 'Couvert (D)',
    details: '<p>Les unités adjacentes à cette unité (alliées ou non) bénéficient d’un couvert contre les attaques à distance. La valeur D indique les dés ou symboles automatiques que les unités adjacentes ajoutent à leur jet de défense.</p>'
  },
  {
    title: 'Dissipation (D)',
    details: '<p>Lorsque cette unité est ciblée par un sort, elle peut tenter de le bloquer. La valeur D indique le dé ou les symboles automatiques à lancer pour bloquer le sort. Cette unité ne gagne pas de Teinte sur un <img src="bouclier-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. On ne peut pas bloquer un sort plus d’une fois ni avec plus d’une unité.</p>'
  },
  {
    title: 'Éclaireur',
    details: `
      <p>
      Les unités d’Éclaireurs peuvent se déployer juste après que toutes les autres unités des deux camps ont fini de se déployer. Ils représentent des avant-gardes qui ont reconnu le terrain et qui choisissent la meilleure position.
      </p>
      <p>Si votre aversaire possède aussi des éclaieurs, celui qui a l'initiative décide qui déploie 1 de ses unités d'Eclaireurs en premier. Vous et votre adversaire devez alterner jusqu'à ce que vous ayez déployé tous vos Eclaireurs.
      </p>
      <p>
      Vous pouvez aussi garder vos unités d’Éclaireurs secrètes et les déployer une fois la partie commencée, en respectant les contraintes
        suivantes :</p>
    <ul>
      <li>
        Vous pouvez déployer votre unité d’Éclaireurs n’importe où dans votre zone de déploiement (mais pas engagée en combat).
      </li>
      <li>
        Vous pouvez déployer votre unité d’Éclaireurs adjacente à un des bords du champ de bataille, tant que vous êtes hors de la  zone de déploiement de votre adversaire et qu’aucune unité ennemie à 12 pas ou moins n’a de LdV sur votre unité.
      </li>
    </ul>

    <p>
      Si vous déployez une unité d’Éclaireur après le début de la partie, vous devez l’activer immédiatement et consommer une de vos deux actions pour son activation. Ainsi, elle ne pourra réaliser qu’une seule action, qui ne peut pas être une action complexe.
    </p>
    `
  },
  {
    title: 'Élite',
    details: '<p>Après les jets de dés (relances incluses) et avant les variations, cette unité peut remplacer tout ' +
      '<img src="success-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>, ' +
      'tout <img src="bouclier-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="bouclier.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>,' +
      ' et tout <img src="alert-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="alert.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. Cet effet s’applique à tous ses jets.</p>'
  },
  {
    title: 'Embusqué',
    details: `
    <p>
    Les unités Embusquées se cachent, prêtes à entrer en action après le début de la bataille en frappant par surprise.
    Vous pouvez garder vos unités Embusquées secrètes et ne les déployer qu’après avoir commencé la partie.
  </p>
  <p>
    Vous pouvez activer votre unité Embusquée pendant votre tour au lieu d’activer une autre unité,
    comme si vos Embusqués étaient déjà sur le champ de bataille. Dans ce cas :
  </p>
  <ul>
    <li>
      <strong>Déployez l’unité sur le champ de bataille :</strong>
      <ul>
        <li>
          À n’importe quel endroit de votre zone de déploiement. Vous pouvez la déployer engagée en combat avec une unité ennemie.
          Elle est considérée comme ayant chargé, mais l’unité ennemie ne peut pas tenir bon et tirer.
        </li>
        <li>
          N’importe où sur le champ de bataille, sauf dans la zone de déploiement ennemie, et aucune unité ennemie
          à 10 pas ou moins ne doit avoir de Ligne de Vue (LdV) sur elle.
        </li>
      </ul>
    </li>
    <li>
      <strong>Activez ensuite votre unité.</strong>
    </li>
  </ul>
`
  },
  {
    title: 'Équipage',
    details: '<ul><li>L’unité ignore les effets d’Intimidation.</li><li>L’unité n’est stressée que si elle est activée plusieurs fois au cours d’un même round.</li></ul>'
  },
  {
    title: 'Fureur',
    details: '<p>Ajoute <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> à ses jets d’attaque lorsqu’elle charge.</p>'
  },
  {
    title: 'Golem',
    details: '<ul><li>Ignore l’Intimidation.</li><li>Immunisé contre Effrayé.</li><li>Ne peut pas être démoralisé. Si le stress dépasse la valeur de MOR, ignorez l’excédent.</li></ul>'
  },
  {
    title: 'Inamovible',
    details: '<p>Ne peut pas être attirée, bousculée, placée, replacée ni forcée au repli, sauf si vous le souhaitez.</p>'
  },
  {
    title: 'Intrépide',
    details: '<p>Ignore Intimidation et immunisé contre Effrayé.</p>'
  },
  {
    title: 'Intimidation (N)',
    details: `
    <p>
    Lorsque cette unité engage le combat, l’unité ennemie doit effectuer un test de VOL et obtenir
    au moins autant de
    <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    que la valeur <strong>N</strong> pour éviter d’être stressée.
  </p>
  <p>
    Pour chaque
    <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    manquant, l’unité ennemie gagne 1 point de stress.
  </p>`
  },
  {
    title: 'Massive',
    details: `<ul>
    <li>
      Les unités Massives peuvent traverser les unités qui ne le sont pas.
      Les unités traversées doivent réussir un test de VOL pour éviter le stress.
      De plus, une unité traversée doit faire un jet opposé avec sa défense contre autant de
      <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
      qu’il y a de soldats dans ladite unité (jusqu’à un maximum de 3).
      Elle subira autant de dégâts que de
      <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
      non annulés.
    </li>
    <li>
      Même engagée en combat, une unité Massive peut charger une autre unité si elle a une Ligne de Vue (LdV)
      sur elle et peut se déplacer pour l’engager. Ce mouvement de charge provoque une attaque d’opportunité.
    </li>
    <li>
      Seules les autres unités Massives et les décors avec le mot-clé <em>Bloque la LdV</em> bloquent la LdV vers les unités Massives.
    </li>
    <li>
      Les unités Massives sont toujours considérées comme <em>Inamovibles</em>.
    </li>
  </ul>`
  },
  {
    title: 'Rage de berserker',
    details: `<p>
    Votre unité peut s’infliger
    <img src="sang.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    pour ajouter un symbole de votre choix à un jet d’attaque, de défense ou de VOL.
    Vous devez le faire après le jet de dés mais avant de passer à l’étape des variations.
  </p>
  <p>
    Vous ne pouvez pas vous infliger ce dégât si cela entraîne l’élimination de l’unité.
    Ce dégât n’est pas pris en compte lors de la résolution d’un combat.
  </p>`
  },
  {
    title: 'Soif de sang (X)',
    details: `<p>
    Si l’unité n’est pas engagée en combat lorsqu’elle est activée, elle est obligée de charger
    <img src="complexe.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    une unité ennemie <strong>X</strong>, à chaque fois que c’est possible.
    <em>X</em> peut être le nom d’une unité, un mot-clé ou plusieurs de ces éléments (séparés par des traits « | »).
    Si aucune valeur n’est spécifiée pour <em>X</em>, l’unité doit charger
    <img src="complexe.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    l’unité ennemie la plus proche.
  </p>
  <p>
    Si l’unité charge en raison de sa Soif de sang, elle peut relancer tous ses jets d’attaque tant qu’elle est engagée avec l’unité ennemie (et pas seulement lorsqu’elle charge).
  </p>
  <p>
    Au début de son activation, l’unité peut ignorer les effets de Soif de sang jusqu’à la fin de son activation en réussissant un test de VOL.
  </p>`
  },
  {
    title: 'Terrain favori (E)',
    details: `
<p>L'unité peut ignorer les effets des décors de type E, ce qui peut désigner un type de décor, un mot-clé, ou plusieurs de ces élements (séparés dans ce cas par des trait | ).</p>
<p>De plus, si votre unité est adjacente à un décor de type Terrain favori au début de son activation, ajoutez 2 pas à sa première valeur de mouvement, et à son mouvement de charge.</p>
`
  },
  {
    title: 'Teinte',
    details: '<p>Votre unité reçoit <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> au début de chaque manche, après l\'étape "Vérifier les effets de la teinte."</p>'
  },
  {
    title: 'Visée',
    details: '<p>Peut relancer ses jets d’attaque à distance. La cible ne bénéficie pas du Couvert (D).</p>'
  }
];


export const ACTIONS_SIMPLES: CollapsibleItem[] = [
  {title: 'Déplacer', details: `
    <ul>
        <li>Déplacez l'unité de votre première valeur de mouvement.</li>
        <li>Puis déplacez l'unité de votre seconde valeur de mouvement.</li>
    </ul>
  `},
  {title: 'Attaque de mêlée', details: `
    <ul>
        <li>Faites une manoeuvres de positionnement si nécessaire.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> non annulé inflige <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/> à l'unité ennemie.</li>
        <li>L'unité qui a subis le plus de dégâts (au moins <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/>) est stressée à la fin de l'activation.</li>
        <li>L'unité gagante peut <b>forcer au repli</b> l'unité perdante et décider de la poursuivre, ou non (première valeur de Mouvement).</b></li>
        <li>Faites une seconde manoeuvre de positionnement si nécessaire à la fin du combat.</li>
    </ul>
  `},
  {title: 'Attaque à distance', details: `
    <ul>
        <li>Le défenseur ne peut utiliser que <img src="de-b.png" alt="dé bleu" style="height: 1em; vertical-align: -0.2em;"/>  <img src="de-v.png" alt="dé vert" style="height: 1em; vertical-align: -0.2em;"/> <img src="de-n.png" alt="dé noir" style="height: 1em; vertical-align: -0.2em;"/> <img src="bouclier.png" alt="bouclier" style="height: 1em; vertical-align: -0.2em;"/> et <img src="bouclier-hollow.png" alt="bouclier hollow" style="height: 1em; vertical-align: -0.2em;"/> dans son jet de défense.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> non annulé inflige <img src="sang.png" alt="1 blessure" style="height: 1em; vertical-align: -0.2em;"/> à l'unité ennemie. Le défenseur ne peut pas agir sur les variations.</li>
    </ul>
  `},
  {title: 'Lancer un sort', details: `
      <ul>
        <li>Choisissez votre sort et déclarez si vous appliquez des altérations.</li>
        <li>Créez le jet de teinte : prenez <img src="de-n.png" alt="dé noir" style="height: 1em; vertical-align: -0.2em;"/> pour chaque jeton de teinte sur votre unité Mage. Chaque altération ajoute autant de <img src="de-n.png" alt="dé noir" style="height: 1em; vertical-align: -0.2em;"/> que son coût l'indique.</li>
        <li>Résolvez un jet face à face entre votre valeur de VOL et le jet de teinte.</li>
        <li>Votre adversaire peut tenter de bloquer le sort avec le VOL d'un mage, ou avec Dissipation.</li>
        <li>Si après la résolution, vous obtenez au moins <img src="succes.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> sur le jet, appliquez les effets du sort.</li>
        <li>Pour chaque <img src="bouclier-hollow.png" alt="Bouclier hollow" style="height: 1em; vertical-align: -0.2em;"/> obtenu au jet de teinte, vous recevez un <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/></li>
        <li>Si vous avez obtenu au moins un <img src="alert-hollow.png" alt="alert hollow" style="height: 1em; vertical-align: -0.2em;"/> sur le jet de teinte, appliquez les effets de la teinte à la fin de l'activation.</li>
    </ul>
  `},
  {title: 'Capacité de teinte', details: `
      <ul>
        <li>Choisissez votre capacité de teinte.</li>
        <li>Dépensez <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `},
  {title: 'Utiliser une compétence', details: `
      <ul>
        <li>Choisissez votre compétence et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `}
];

export const ACTIONS_COMPLEXES: CollapsibleItem[] = [
  {title: 'Assaut', details: `
    <ul>
        <li>Déplacez-vous jusqu'à engager le combat avec l'ennemi, en utilisant votre première puis votre seconde valeur de mouvement.</li>
        <li>Résolvez une attaque de mêlée contre lui.</li>
    </ul>
  `},
  {title: 'Charge', details: `
    <ul>
        <li>Déplacez-vous en ligne droite, en utilisant le mouvement de charge, jusqu'à engager le combat avec l'ennemi.</li>
        <li>Résolvez une attaque de mêlée contre lui. Vous pouvez relancer le jet d'attaque.</li>
    </ul>
  `},
  {title: 'Repos', details: `
    <p>Quand votre unité effectue cette action, utilisez autant des options suivantes</p>
    <ul>
        <li>Eliminer tout son stress.</li>
        <li>Supprimer n'importe quel état de son profil.</li>
        <li>Effectuer un mouvement en utilisant uniquement sa deuxième valeur de Mouvement.</li>
    </ul>
    <p>Même si elle a déjà été activée pendant ce round, l'unité n'est pas stressée en effectuant cette action.</p>
  `},
  {title: 'Utiliser une compétence longue', details: `
      <ul>
        <li>Choisissez votre compétence avec le symbole <img src="complexe.png" alt="longue" style="height: 1em; vertical-align: -0.2em;"/> et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `}
];
