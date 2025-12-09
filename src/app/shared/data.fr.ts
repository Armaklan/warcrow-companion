import {CollapsibleItem, Decor, Feat, Scenario} from './data.model';

// Toutes les constantes sont regroupées dans l'objet FR

const ETATS: CollapsibleItem[] = [
  {
    title: 'Effrayé / Découragé / Frightened', details: `<b>Etat</b><p>Quand il effectue un test de volonté, l'unité doit relancer une fois tous les dés indiquant au moins <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>.</p>
<p>Retirez cet état après avoir effectué un test de Volonté.</p>`, icon: 'effraye.png'
  },
  {
    title: 'Ralenti / Slowed',
    details: `<b>Etat</b><p>
Votre unité ne peut utiliser que l'un ou l'autre de ses valeurs de mouvements (MOV) lors des actions de mouvement et d’assaut.
  De plus, vous devez soustraire 4 pas à votre mouvement de charge (min. 0).
</p>
<p><em>Exemple :</em> Si votre unité a un mouvement 3-2 (9), elle ne peut se déplacer que de 3 pas et ne peut charger que jusqu’à 5 pas.</p>
<p>Retirez cet état à la fin de l’activation durant laquelle votre unité effectue un mouvement, un assaut ou une charge.</p>`,
    icon: 'ralenti.png'
  },
  {
    title: 'Démoralisé / Demoralized',
    details: `<b>Etat</b></b><p>Si votre unité est démoralisée :</p>
  <ul>
    <li>Elle ne peut plus être activée d’aucune façon, ni effectuer d'action.</li>
    <li>Elle ne peut se stresser d’aucune façon et ne peut pas réduire son stress.</li>
    <li>Elle ne peut pas contrôler d’objectifs (sa valeur de conquête est nulle).</li>
    <li>Si elle participe à un combat, elle fuira toujours après le résultat (voir “Attaque de mêlée”).</li>
    <li>Elle ne peut pas activer de capacités de commandement.</li>
  </ul>

  <h3>Unité démoralisée</h3>
  <p>Si votre unité est stressée au-delà de sa valeur de MOR, vous devez effectuer un test de VOL à la fin de l’activation en cours. Si vous ne le réussissez pas, votre unité sera démoralisée et devra fuir immédiatement (voir “Fuite”).</p>
  <p>Si votre stress excède la valeur de votre MOR de 2, il vous faut 2 <span class="warcrow-font-Success" role="img" aria-label="succès" > pour réussir ce test.</p>
  <h3>Fuite</h3>
  <p>Si votre unité fuit, vous devez immédiatement la
    déplacer en utilisant ses 2 valeurs de MOV vers votre
    zone de déploiement, en suivant l’itinéraire le plus
    court possible. Si elle s’y trouve déjà, vous devez la
    déplacer vers le bord du champ de bataille le plus
    proche. Lorsqu’une unité en fuite entre en contact
    avec un bord du champ de bataille, retirez-la de
    la partie. Elle compte comme ayant été éliminée à
    toutes fins utiles. Pour qu’une unité soit considérée
    comme étant entrée dans votre zone de déploiement,
    les socles de tous ses soldats doivent se trouver
    intégralement dans les limites de la zone. Il suffit que
    le socle d’un des soldats de l’unité touche le bord du
    champ de bataille pour que l’unité quitte ce dernier.
  </p>
  <h3>Rallier une unité démoralisée</h3>
  <p>Lorsque le compteur de tour atteint le jeton de démoralisation de votre unité, faites un test de VOL pour la rallier :</p>
  <ul>
  <li>Réussite : L'unité n'est plus démoralisé. Son stress diminue à MOR-1. Elle peut effectuer une fois l'action de mouvement.</li>
  <li>Echec : avancez le jeton de démoralisation de 2 crans sur le compteur de tour. Votre unité poursuit sa fuite.</li>
</ul>
    `,
    icon: 'demoraliser.png'
  },
  {
    title: 'Désarmé / Disarmed',
    details: `<b>Etat</b><p>
Votre unité doit annuler un dé de ses jets d’attaque dans lesquels elle a obtenu au moins un symbole
<span class="warcrow-font-Success" role="img" aria-label="succès" ></span>. Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
</p>
<p>Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles, mais avant l’étape des variations.</p>
<p>Vous ne pouvez ajouter de modificateurs lors de vos jets d'attaques.</p>
<p>Retirez cet état à la fin de la résolution de l'action durant laquelle vous avez subi ses effets (si vous n’avez pu annuler aucun dé, l’état persiste).</p>`,
    icon: 'desarme.png'
  },
  {
    title: 'Vulnérable / Vulnerable', details: `<b>Etat</b><p>
    Votre unité doit annuler un dé de ses jets de défense dans lesquels elle a obtenu au moins un <span class="warcrow-font-Block" role="img" aria-label="Block" ></span>.
    Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
  </p>
  <p>
    Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles,
    mais avant l’étape des variations.
  </p>
  <p>Vous ne pouvez ajouter de modificateurs lors de vos jets de défense.</p>
  <p>Retirez cet état à la fin de la résolution de l'action durant laquelle vous avez subi ses effets
    (si vous n’avez pu annuler aucun dé, l’état demeure actif).</p>`, icon: 'vulnerable.png'
  },
  {
    title: 'Stress',
    details: `
      <p>Tant que votre unité a au moins autant de stress que son MOR et un marqueur d'activation, vous ne pouvez l’activer que pour effectuer l’action complexe de repos.</p>
      <p>Si votre unité est stressée au-delà de sa valeur de MOR, vous devez effectuer un test de VOL à la fin de l’activation en cours. Si vous ne le réussissez pas,
      votre unité sera démoralisée et devra fuir immédiatement</p>
      <p>Si le niveau de stress de votre unité excède son MOR de 2 ou plus, il faut 2 <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
      pour éviter d'être démoralisé et mis en fuite. </p>
    `,
    icon: 'stress-token.png'
  },
  {
    title: 'Activation',
    details: `
      <p>Placez ce marqueur sur votre unité après son activation. Si elle est activée une nouvelle fois dans la manche, stressez-le.</p>
      <p>A la fin de la manche, retirez ce marqueur.</p>
    `,
    icon: 'activation.png'
  }
];

const MOTS_CLEFS: CollapsibleItem[] = [
  {
    title: 'Couvert (D) / Cover',
    details: '<p>Les unités adjacentes à cette unité (alliées ou non) bénéficient d’un couvert contre les attaques à distance. La valeur D indique les dés ou symboles automatiques que les unités adjacentes ajoutent à leur jet de défense.</p>'
  },
  {
    title: 'Dissipation (D) / Dispel',
    details: '<p>Lorsque cette unité est ciblée par un sort, elle peut tenter de le bloquer. La valeur D indique le dé ou les symboles automatiques à lancer pour bloquer le sort. Cette unité ne gagne pas de Teinte sur un <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>. On ne peut pas bloquer un sort plus d’une fois ni avec plus d’une unité.</p>'
  },
  {
    title: 'Éclaireur / Scout',
    details: `

      <p>
      Les unités d’Éclaireurs peuvent se déployer juste après que toutes les autres unités des deux camps ont fini de se déployer. Ils représentent des avant-gardes qui ont reconnu le terrain et qui choisissent la meilleure position.
      </p>
      <p>Si votre aversaire possède aussi des éclaieurs, celui qui a l'initiative décide qui déploie 1 de ses unités d'Eclaireurs en premier. Vous et votre adversaire devez alterner jusqu'à ce que vous ayez déployé tous vos Eclaireurs.
      </p>
      <p>Les unités éclaireur doivent toujours se déployer selon ces règles</p>
      <ul>
        <li>
          Vous pouvez déployer votre unité d’Éclaireurs n’importe où dans votre zone de déploiement (mais pas engagée en combat).
        </li>
        <li>
          Vous pouvez déployer votre unité d’Éclaireurs adjacente à un des bords du champ de bataille, tant que vous êtes hors de la  zone de déploiement de votre adversaire et qu’aucune unité ennemie à 12 pas ou moins n’a de LdV sur votre unité.
        </li>
      </ul>
      <p>
      Vous pouvez aussi garder vos unités d’Éclaireurs secrètes et les déployer une fois la partie commencée, en respectant ces mêmes contraintes.</p>
    <p>
      Si vous déployez une unité d’Éclaireur après le début de la partie, vous devez l’activer immédiatement et consommer une de vos deux actions pour son activation. Ainsi, elle ne pourra réaliser qu’une seule action, qui ne peut pas être une action complexe.
    </p>
    `
  },
  {
    title: 'Élite / Elite',
    details: '<p>Après les jets de dés (relances incluses) et avant les variations, cette unité peut remplacer tout ' +
      '<span class="warcrow-font-HollowSuccess" role="img" aria-label="Succès Hollow" ></span> par <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>, ' +
      'tout <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> par <span class="warcrow-font-Block" role="img" aria-label="Blockl" ></span>,' +
      ' et tout <span class="warcrow-font-Hollow-Special" role="img" aria-label="Hollow Special" ></span> par <span class="warcrow-font-Special" role="img" aria-label="Special" ></span>. Cet effet s’applique à tous ses jets.</p>' +
      '<p>Cette règle s\'applique aux tests de VOL, d\'attaque, défense, ainsi qu\'aux effets de compétences ou sort de l\'unité. Cela ne s\'applique pas aux autres tests comme le blocage de sort, la dissipation, ou les tests de teintes.</p>'
  },
  {
    title: 'Embusqué / Ambusher',
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
    title: 'Équipage / Manned',
    details: '<ul><li>L\'unité ignore les effets d’Intimidation.</li><li>L\'unité ne subit pas de stress si elle perd un affrontement.</li></ul>'
  },
  {
    title: 'Fureur / Raging',
    details: '<p>Ajoute <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> à ses jets d’attaque lorsqu’elle charge.</p>'
  },
  {
    title: 'Golem / Golem',
    details: '<ul><li>Ignore l’Intimidation.</li><li>Immunisé contre Effrayé.</li><li>Ne peut pas être démoralisé. Si le stress dépasse la valeur de MOR, ignorez l’excédent.</li></ul>'
  },
  {
    title: 'Inamovible / Immovable',
    details: '<p>Ne peut pas être attirée, bousculée, placée, replacée ni forcée au repli, sauf si vous le souhaitez.</p>'
  },
  {
    title: 'Intrépide / Fearless',
    details: '<p>Ignore Intimidation et immunisé contre Effrayé.</p>'
  },
  {
    title: 'Intimidation (N) / Intimidating',
    details: `
    <p>
    Lorsque cette unité engage ou est engagé au combat, l’unité ennemie doit effectuer un test de VOL et obtenir
    au moins autant de
    <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
    que la valeur <strong>N</strong> pour éviter d’être stressée.
  </p>
  <p>
    Pour chaque
    <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
    manquant, l’unité ennemie gagne 1 point de stress.
  </p>
  <p>Une unité ne peut subir les effets de l'intimidation qu'une fois par activation.</p>`
  },
  {
    title: 'Massive / Large',
    details: `<ul>
    <li>
      Les unités Massives peuvent traverser les unités qui ne le sont pas.
    </li>
    <li>
      Même engagée en combat, une unité Massive peut charger une autre unité si elle a une Ligne de Vue (LdV)
      sur elle et peut se déplacer pour l’engager. Ce mouvement de charge peut provoquer une attaque d’opportunité.
    </li>
    <li>
      Seules les autres unités Massives et les décors avec le mot-clé <em>Bloque la LdV</em> bloquent la LdV vers les unités Massives.
    </li>
    <li>
      Les unités Massives sont toujours considérées comme <em>Inamovibles</em>.
    </li>
    <li>
        Les unités ignorent l'effet <em>Inamovible</em> des unités non-massive.
    </li>
  </ul>`
  },
  {
    title: 'Rage de berserker / Berseker rage',
    details: `<p>
    Votre unité peut s’infliger
    <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>
    pour ajouter un symbole de votre choix à un jet d’attaque, de défense ou de VOL.
    Vous devez le faire après le jet de dés mais avant de passer à l’étape des variations.
  </p>
  <p>
    Vous ne pouvez pas vous infliger ce dégât si cela entraîne l’élimination de l’unité.
    Ce dégât n’est pas pris en compte lors de la résolution d’un combat.
  </p>`
  },
  {
    title: 'Soif de sang (X) / Bloodlust',
    details: `<p>
    Si l’unité n’est pas engagée en combat lorsqu’elle est activée, elle est obligée d'engager (charge ou assaut)
    <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span>
    une unité ennemie <strong>X</strong>, à chaque fois que c’est possible.
    <em>X</em> peut être le nom d’une unité, un mot-clé ou plusieurs de ces éléments (séparés par des traits « | »).
    Si aucune valeur n’est spécifiée pour <em>X</em>, l’unité doit charger
    <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span>
    l’unité ennemie la plus proche.
  </p>
  <p>
    Si l’unité engage en raison de sa Soif de sang, elle peut relancer tous ses jets d’attaque durant les activations où elle est engagée avec l’unité ennemie (et pas seulement lorsqu’elle charge ou fait un assaut).
    Cette relance est la même que celle obtenue par la charge, et ne peut donc être cumulé. L'effet persiste si après les poursuites les deux unités sont toujours engagées.
  </p>
  <p>
    Au début de son activation, l’unité peut ignorer les effets de Soif de sang jusqu’à la fin de son activation en réussissant un test de VOL.
  </p>`
  },
  {
    title: 'Terrain favori (E) / Preferred terrain',
    details: `
<p>L'unité peut ignorer les effets des décors de type E, ce qui peut désigner un type de décor, un mot-clé, ou plusieurs de ces élements (séparés dans ce cas par des trait | ).</p>
    <ul>
    <li>Si ‘E’ indique un mot-clef, votre unité peut ignorer ce mots-clefs des terrains.</li>
    <li>Si 'E' indique un élement de décors, votre unité peut ignorer tout les mots clefs de cet élement.</li>
    <li>Si 'E' indique à la fois un mot-clef et un élement de décors, vous n'ignorez que ce mot-clef de ce type d'élement précis.</li>
    </ul>
`
  },
  {
    title: 'Teinte / Tinge',
    details: `
    <p>Votre unité reçoit <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> au début de chaque manche.</p>
    <b>Personnage rejoignant une unité</b>
    <p>L'unité rejointe est considéré comme ayant le mot-clé Teinte quand le personnage l'a rejoint. Elle recevra donc <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> au début de chaque manque. </p>
    <b>Unité en dehors du champs de bataille</b>
    <p>Les unités hors du champs de bataille ne reçoivent pas de <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> grâce à ce mot-clé.</p>
    `
  },
  {
    title: 'Visée / Aim',
    details: '<p>Peut relancer ses jets d’attaque à distance. La cible ne bénéficie pas du Couvert (D).</p>'
  },
  {
    title: 'Rejoindre / Join',
    details: `
      <p>Les Personnages capables d’intégrer une unité ont le mot-clé Rejoindre (X) dans leur profil, où X peut être le nom d’une unité, une caractéristique,
      un mot-clé ou plusieurs de ces éléments séparés par des traits “ | ”. Dans ce dernier cas, l’unité cible doit posséder tous les mots-clés ou
      caractéristiques, ou être nommée comme au moins un des éléments.</p>
      <p>Les personnages de type Officier deviennent automatiquement le leader de l'unité qu'ils rejoignent.</p>
    `
  },
  {
    title: 'Bousculer (X) / Shove',
    details: `
      <p>L’unité ciblée doit s’éloigner de votre unité de X pas en suivant la trajectoire indiquée en traçant
        une ligne reliant les centres des socles des leaders de votre unité et de l’unité ciblée. Ce mouvement
        ne provoque pas d’attaque d’opportunité.</p>
      <p>
        Si l’unité ciblée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
        celui-ci s’interrompt immédiatement à cet endroit précis.
      </p>
    `
  },
  {
    title: 'Attirer (X) / Attract',
    details: `
      <p>L’unité ciblée doit s’approcher de votre unité de X pas en suivant la trajectoire indiquée en traçant
        une ligne reliant les centres des socles des leaders de votre unité et de l’unité ciblée. Ce mouvement
        ne provoque pas d’attaque d’opportunité.</p>
      <p>Si l’unité ciblée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
        celui-ci s’interrompt immédiatement à cet endroit précis.</p>
    `
  },
  {
    title: 'Placer (X) / Place',
    details: `
      <p>Indiquez un point sur le champ de bataille à X pas du leader de votre unité. Celui qui contrôle l’unité
      ciblée doit prendre son leader et le placer sur le point indiqué. Vous devez ensuite placer le reste des
      soldats de l’unité ciblée en formation.</p>
      <p>Ce mouvement de l’unité placée ne provoque pas d’attaques d’opportunité.</p>
      <p>Vous ne pouvez pas placer de figurines sur d’autres figurines et vous ne pouvez pas placer une unité
      sur un décor Infranchissable.</p>
    `
  },
  {
    title: 'Replacer (X) / Displace',
    details: `
      <p>L’unité que vous replacez doit effectuer un mouvement rectiligne de X pas dans la direction que
      vous choisissez. Les effets des décors (sauf Infranchissable) n’affectent pas ce mouvement. Il ne
      provoque pas d’attaque d’opportunité.</p>
      <p>Si l’unité replacée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
      celui-ci s’interrompt immédiatement à cet endroit précis.</p>
    `
  }
];

const ACTIONS_SIMPLES: CollapsibleItem[] = [
  {
    title: 'Déplacer', details: `
    <ul>
        <li>Déplacez l'unité de votre première valeur de mouvement.</li>
        <li>Puis déplacez l'unité de votre seconde valeur de mouvement.</li>
    </ul>
  `
  },
  {
    title: 'Attaque de mêlée', details: `
    <ul>
        <li>Faites une manoeuvres de positionnement si nécessaire.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> non annulé inflige <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> à l'unité ennemie.</li>
        <li>L'unité qui a subis le plus de dégâts (au moins <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>) est stressée à la fin de l'activation.</li>
        <li>L'unité gagante peut <b>forcer au repli</b> l'unité perdante et décider de la poursuivre, ou non (première valeur de Mouvement).</b></li>
        <li>Faites une seconde manoeuvre de positionnement si nécessaire à la fin du combat.</li>
    </ul>
    <p>
        <b>Manoeuvre de repositionnement</b>
    </p>
    <ul>
      <li>En commençant par votre leader, vous devez placez les soldats non engagés de votre unité au contact d'au moins un soldat ennemi.</li>
      <li>Vos soldats doivent toujours rester en formation.</li>
      <li>Vous pouvez échanger la position de votre leader avec celle de n'importe quel soldat engagé avec l'ennemi.</li>
      <li>S'il vous est impossible d'engager un soldat en combat, vous devez le placer au contact de votre leader, ou, à défaut, de toute autre soldat de votre unité.</li>
      <li>S'il n'est pas possible de respecter un des points, placez le soldat le plus près possible de votre leader.</li>
    </ul>
    <p>
        <b>Forcer au repli</b>
    </p>
    <ul>
        <li>Le gagnant du combat peut repousser l'unité perdante de la première valeur de mouvement de celle-ci. Si le mouvement ne peut être effectuer totalement, le gagnant doit choisir une direction qui maximise la distance entre les deux unités.</li>
        <li>Le perdant du conflit peut stresser son unité pour prévenir le repli.</li>
        <li>L'unité gagnante peut poursuivre l'unité qui se replie en se déplaçant totalement de sa première valeur de mouvement. Si le leader entre en contact socle à socle avec l'adversaire, il peut l'engager (vous n’êtes pas considéré
            comme ayant chargé).</li>
    </ul>
    <p><b>Elimination d'une unité</b></p>
    <ul>
        <li>Si vous avez complètement éliminé l'unité ennemie, votre unité peut effectuer l'action de mouvement gratuitement une fois (cela ne compte pas comme une activation).</li>
    </ul>
  `
  },
  {
    title: 'Attaque à distance', details: `
    <ul>
        <li>Le défenseur ne peut utiliser que <span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>  <span class="warcrow-font-Green" role="img" aria-label="Green dice" ></span> <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span> <span class="warcrow-font-Block" role="img" aria-label="Block" ></span> et <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> dans son jet de défense.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> non annulé inflige <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> à l'unité ennemie. Le défenseur ne peut pas agir sur les variations.</li>
    </ul>
    <p>Cette action est interdite si vous êtes au corps à corps.</p>
    <h3>Attaque à distance en mêlée</h3>
    <p>Vous pouvez ciblez une unité ennemi engagé au combat contre une unité ami. Dans ce cas, vous devez considérez votre propre
    unité comme étant un élement de jeu qui offre un Couvert <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>
    L'unité ami subira un stress à la fin de l'activation.</p>
  `
  },
  {
    title: 'Lancer un sort', details: `
      <ol>
        <li>Choisissez votre sort et déclarez si vous appliquez des altérations (dés noirs ou teinte), puis vérifier les conditions de lancement du sort. Si les conditions ne sont pas remplis, vous ne pouvez lancer le sort.</li>
        <li>Vous adversaire déclare s'il dissipe ou tente de contrer le sort.</li>
        <li>Résolvez un jet face à face entre la VOL du lanceur de sort et le test de dissipation.</li>
        <li>Le lanceur de sort peut recevoir <img src="teint.png" alt="1 teinte" style="height: 1em; vertical-align: -0.2em;"/> pour ajouter un <span class="warcrow-font-Success" role="img" aria-label="succès" ></span></li>
        <li>Si vous obtenez au moins <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> sur le jet, appliquez les effets du sort. </li>
        <li>Si le sort est une réussite et que vous avez déclarez des altérations de teintes, dépensez la.</li>
        <li>Si le lanceur de sort a déclarer des altérations <span class="warcrow-font-Black" role="img" aria-label="succès" > faire un test de teinte. Si le lanceur a utilisez de la teinte pour obtenir une réussite, il subit un effet de teinte.</li>
      </ol>
      <p>Si vous êtes au corps à corps, cette action ne peut cibler que votre unité ou une unité ennemis avec laquelle vous êtes engagée.</p>
      <p>Jet de teinte</p>
      <ol>
        <li>Créez le jet de teinte : prenez <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span> comme indiqué dans les altérations choisis du sort.</li>
        <li>Pour chaque <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> obtenu au jet de teinte, vous recevez un <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/></li>
        <li>Appliquez les effets de la teinte.</li>
      </ol>
  `
  },
  {
    title: 'Capacité de teinte', details: `
      <ul>
        <li>Choisissez votre capacité de teinte.</li>
        <li>Dépensez <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
    <p>Si vous êtes au corps à corps, cette action ne peut cibler que votre unité ou une unité ennemis avec laquelle vous êtes engagée.</p>
  `
  },
  {
    title: 'Utiliser une compétence', details: `
      <ul>
        <li>Choisissez votre compétence et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
    <p>Si vous êtes au corps à corps, cette action ne peut cibler que votre unité ou une unité ennemis avec laquelle vous êtes engagée.</p>
  `
  }
];

const ACTIONS_COMPLEXES: CollapsibleItem[] = [
  {
    title: 'Assaut', details: `
    <ul>
        <li>Déplacez-vous jusqu'à engager le combat avec l'ennemi, en utilisant votre première puis votre seconde valeur de mouvement.</li>
        <li>Résolvez une attaque de mêlée contre lui.</li>
    </ul>
  `
  },
  {
    title: 'Charge', details: `
    <ul>
        <li>Déplacez-vous en ligne droite, en utilisant le mouvement de charge, jusqu'à engager le combat avec l'ennemi.</li>
        <li>Résolvez une attaque de mêlée contre lui. Vous pouvez relancer le jet d'attaque.</li>
    </ul>
  `
  },
  {
    title: 'Repos', details: `
    <p>Quand votre unité effectue cette action, utilisez autant des options suivantes</p>
    <ul>
        <li>Eliminer tout son stress.</li>
        <li>Supprimer n'importe quel état de son profil.</li>
        <li>Effectuer un mouvement en utilisant uniquement sa deuxième valeur de Mouvement.</li>
    </ul>
    <p>Même si elle a déjà été activée pendant ce round, l'unité n'est pas stressée en effectuant cette action.</p>
    <p>Une unité ne peut déclarer cette action au corps à corps.</p>
  `
  },
  {
    title: 'Utiliser une compétence longue', details: `
      <ul>
        <li>Choisissez votre compétence avec le symbole <span class="warcrow-font-LongAction" role="img" aria-label="Long Action" ></span> et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
    <p>Si vous êtes au corps à corps, cette action ne peut cibler que votre unité ou une unité ennemis avec laquelle vous êtes engagée.</p>
  `
  }
];

const ACTIONS_REACTIONS: CollapsibleItem[] = [
  {
    title: 'Tenir et tirer', details: `
    <p>Vous pouvez déclarer cette réaction quand : </p>
    <ul>
        <li>Vous êtes la cible d'une charge ou d'un assaut.</li>
        <li>Vous n'avez pas été activé durant ce round (pas de marqueur d'activation sur le profile).</li>
        <li>Vous avez une ligne de vue sur l'unité ennemis.</li>
    </ul>
    <p>Dans ce cas, suivez les étapes suivantes :</p>
    <ul>
      <li>Placez un marqueur d'activation sur le profil de l'unité.</li>
      <li>Faites une attaque de tir contre l'adversaire avant son mouvement. Tout les pre-requis du tir doivent être remplis, sauf la portée. Le tir est considéré comme
          ayant lieu à n'importe quel moment du trajet adverse. Les variations ne peuvent pas être utilisé durant ce tir.</li>
      <li>Une fois le tir résolu, l'ennemis termine sa charge.</li>
    </ul>
  `
  },
  {
    title: 'Contrer un sort', details: `
      <p>Vous pouvez déclarer cette réaction quand : </p>
      <ul>
          <li>Vous avez un lanceur de sort sur le champs de bataille.</li>
          <li>Vous possédez le mot clef dissipation et vous êtes la cible du sort.</li>
      </ul>
      <ol>
        <li>Déclarer votre intention de bloquer le sort pendant l'état 2 du lancement. </li>
        <li>Formez le test de blocage : prenez 3 <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>, ou les dés indiqués par la compétence Dissipation, et lancez les. Le résultat sera opposé au test de lancement du sort durant l'étape 3./</li>
        <li>Pour chaque <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> obtenu, l'unité qui bloque le sort reçoit <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/> </li>
        <li>Si vous avez obtenu au moins un <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>, appliquez les effets de la teinte à la fin de l'activation. </li>
      </ol>
      <p>Vous ne pouvez pas tenter de bloquer un sort plus d'une fois ou avec plusieurs unités.</p>
    `
  }
];

// Nouvelles données: Capacités (compétence, passive, commandement, ...)
const CAPACITES: CollapsibleItem[] = [
  {
    title: 'Compétence',
    details: `
      <p>Les compétences sont des capacités que vous pouvez activez à l'aide d'une action simple ou complexe.</p>
    `,
    icon: 'competence.png'
  },
  {
    title: 'Passive',
    details: `
      <p>Les passives sont des effets toujours actifs. Tant que l'unité remplit les conditions, l'effet s'applique automatiquement.</p>
    `,
    icon: 'passive.png'
  },
  {
    title: 'Commandement',
    details: `
      <p>Les capacités de commandement s'activent par la dépense de point de commandement.</p>
    `,
    icon: 'commandement.png'
  },
  {
    title: 'Sort',
    details: `
      <p>Les sorts sont des actions de magie. Leur fonctionnement est décrite dans la liste des actions. </p>
    `,
    icon: 'sort.png'
  },
  {
    title: 'Actions de teinte',
    details: `
      <p>Les actions de teintes sont des actions. Leur fonctionnement est décrite dans la liste des actions. </p>
    `,
    icon: 'teint.png'
  }
];

const MOTS_CLEFS_DECORS: CollapsibleItem[] = [
  {
    title: 'Accidenté (X) / Rugged',
    details: `
        <p>Les unités définies par X reçoivent l'état Ralenti du moment qu'elles sont adjacentes au décors pendant leur activation. De plus, elles ne peuvent pas déclarer de charge si la trajectoire du mouvement de la charge les amènes à être adjacentes au décors.</p>
        <p>X peut être le nom d'une unité, d'une caractéristique, d'un mot-clé, ou de plusieurs de ce élements. Si aucune valeur X n'est spécifiée, l'effet s'applique à toutes les unités.</p>
    `
  },
  {
    title: 'Bloque la LdV / Block LoS',
    details: `
      Ce décor bloque tous les LdV tracées à travers lui, ainsi que celles tracées depuis son intérieur et vers son intérieur. A moins qu'un décor ne possède ce mot-clé, il n'est jamais considéré comme bloquant les LdV.
    `
  },
  {
    title: 'Couvert (D) / Cover',
    details: `<p>Les unités adjacentes à ce décor peuvent bénéficier d'un couvert lors d'une attaque à distance. La valeur D indique les dés ou symboles automatique que les unités adjacentes ajoutent à leur jet de défense.</p>`
  },
  {
    title: 'Infranchissable / Impassable',
    details: `<p>Les unités ne peuvent pas traverser ce décor, n'y y finir leur mouvement. Si un décor gagne la caractéristique Infranchissable pendant la bataille, les unités qui s'y trouvent doivent se déplacer pour devenir adjacentes.</p>`
  },
  {
    title: 'Mortel (X:D) / Lethal',
    details: `
      <p>Les unités définies par X et
      rentrant au contact avec ce décor, subissent une
      attaque de mêlée résolue avec un
      jet D. Le décor ne peut pas subir
      de dégâts et ne force pas les unités
      au repli.</p>
      <p>X peut être le nom d’une unité,
      d’une caractéristique, d’un mot-clé
      ou de plusieurs de ces éléments
      (dans ce cas séparés par des traits
      “|”) (voir “Personnages. Rejoindre
      une unité” pour des exemples de
      X). Si aucune valeur n’est spécifiée
      pour X, l’effet s’applique à toutes
      les unités.</p>`
  },
  {
    title: 'Piège / Trap',
    details: `
      <p>Ce décor a été créé par une unité utilisant une compétence ou un
        sort. Les unités capables de supprimer les pièges peuvent retirer
        ce décor du champ de bataille.
      </p>
      <p>
        Placer un piège
      </p>
      <p>Toutes les unités qui placent un piège doivent suivre les règles suivantes :</p>
      <ul>
        <li>A moins que ce soit spécifiée, l'élement de piège doit avoir un diamètre de 6 pas.</li>
        <li>Vous ne pouvez le placer par dessus un élement impassable.</li>
        <li>Les unités ne sont pas des élements de terrain, vous pouvez donc placer un piège sous l'une d'entre elle.
        Prenez leur position actuelle comme point de référence, soulevez les unités, et placez le piège en dessous avant
         de reposer les figurines aussi près que possible de leurs positions initiale.</li>
      </ul>
    `
  },
  {
    title: 'Sinistre (X) / Sinister',
    details: `<p>
        Les unités définies par X qui se
        trouvent jusqu’à 4 pas de ce décor au début de leur activation
        doivent réussir un test de VOL ou
        devenir stressées.
        </p>
        <p>
        X peut être le nom d’une unité,
        d’une caractéristique, d’un mot-clé
        ou de plusieurs de ces éléments
        (dans ce cas séparés par des traits
        “|”) (voir “Personnages. Rejoindre
        une unité” pour des exemples de
        X). Si aucune valeur n’est spécifiée
        pour X, l’effet s’applique à toutes
        les unités.
        </p>`
  },
  {
    title: 'Brouillard',
    details: `
    <p>
        Le brouillard est représenté sous forme de marqueurs.
    </p>
    <p>Une unité qui terminé son activation dans les 4 pas d'un marqueur Brouillard reçoit 1 teinte. </p>
    <p>Le brouillard ne coupe pas les lignes de vue et n'interrompt pas le mouvement.
    Une unité ne peut placer un marqueur brouillard à moins de 10 pas d'un autre marqueur brouillard.</p>`
  }
];

const DECORS: Decor[] = [{
  title: 'Clôture/Barricade',
  keywords: [{name: 'Couvert', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`}],
  dimensions: `Socle de 4 à 13 pas de long et pas plus d'un pas de large`
}, {
  title: 'Mur',
  keywords: [{name: 'Couvert', value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`}],
  dimensions: `Socle de 4 à 13 pas de long et pas plus d'un pas de large`
}, {
  title: 'Petite structure',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }, {name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 4 à 7 pas de coté`
}, {
  title: 'Bâtiment',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`
  }, {name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Forêt clairsemée',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Forêt dense',
  keywords: [{name: 'Accidenté', value: 'Cavalerie, Golem'}, {name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Rivière',
  keywords: [{name: 'Accidenté'}],
  dimensions: `Socle d'une longue de 4 à 13 pas et d'une largeur maximale de 7 pas`
}, {
  title: 'Lac',
  keywords: [{name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Ruines',
  keywords: [{name: 'Accidenté'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Terrain accidenté',
  keywords: [{name: 'Accidenté'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}];

const SCENARIO: Scenario[] = [{
  title: 'Prendre position',
  image: 'scenario/take-position.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM pour chaque objectif adversaire controllé`,
    `1 PM si aucun objectif amis n'est controllé par l'adversaire`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`
  ]
}, {
  title: `Zone d'influence`,
  image: 'scenario/influence-zone.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM si vous contrôlez plus d'objectifs que l'adversaire.`,
    `1 PM si vous contrôlez au moins un objectif adverse.`,
    `1 PM si vous contrôlez au moins 2 objectifs.`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`,
    `1 marqueur d'objectif marron`
  ],
  additionnal: `
    <h2>Domaine stratégique</h2>
    <ul>
     <li>Toutes les unités qui ne sont pas démoralisées ont une valeur de conquête augmentée de 1.</li>
     <li>Les modificateurs de conquêtes ne sont pas augmentés. </li>
    </ul>
    <h2>Zone d'influence</h2>
    <p>Les unités peuvent contester le contrôle d'un objectif à 7 pas au lieu de 3.</p>
  `
}, {
  title: `Expansion`,
  image: 'scenario/expanse.png',
  roundLength: 5,
  endRoundScoring: [
    `2 PM si vous contrôlez plus d'objectifs marron que l'adversaire.`,
    `1 PM si vous contrôlez le même nombre d'objectif marron que l'adversaire.`,
    `1 PM si vous contrôlez l'objectif bleu central.`
  ],
  endGame: 3,
  requiredMaterial: [
    `4 marqueurs d'objectifs marron`,
    `1 marqueurs d'objectifs bleu`
  ],
  additionnal: `
    <h2>Préparation</h2>
    <p>Les objectifs marrons commencent avec un marqueur de contrôle de la compagnie qui a sa zone de déploiement adjacente au marqueur.</p>
  `
}, {
  title: `Butin`,
  image: 'scenario/loot.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM si vous possédez au moins 1 butin.`,
    `1 PM si vous possédez plus de butins que l'adversaire  .`,
    `1 PM si votre adversaire ne possède pas de butin.`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`,
    `1 marqueur d'objectif marron`
  ],
  additionnal: `
    <h2>Butin</h2>
    <p>Les marqueurs d'objectif servent à représenter le butin. Ils utilisent ces règles à la place de celle du livre de règles :</p>
    <ul>
        <li>Un unité adjacente à un objectif peut se stressé pour le récupérer. Placez le sur votre fiche de profil.</li>
        <li>Les unités peuvent traverser les marqueurs objectifs mais pas s'arrêter dessus.</li>
        <li>Les unités ne peuvent saisir d'objectif de la couleur adverse.</li>
        <li>Une unité ne peut pas porter plus d'un marqueur objectif à la fois.</li>
        <li>Quand une unité portant un objectif doit quitter de la table, la compagnie
        doit placer l'objectif à coté du leader de l'unité avant de le retirer de la table. Si une unité est détruite
        mais contenait dans ces rangs un personnage officier, donnez-lui l'objectif. </li>
        <li>Quand une unité portant un objectif est démoralisée, placez l'objectif au sol à coté du leader avant la fuite.</li>
        <li>Si un personnage quitte une unité qui porte un objectif, il peut choisir de prendre ou de laisser l'objectif.</li>
    </ul>
  `
}, {
  title: `Consolider la progression`,
  image: 'scenario/consolidate-progress.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM si vous contrôlez l'objectif central.`,
    `1 PM si vous contrôlez l'objectif n°2 de l'adversaire.`,
    `1 PM si aucun objectif de votre couleur n'est contrôlé par l'adversaire.`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`,
    `1 marqueur d'objectif marron`
  ],
  additionnal: ``
}, {
  title: `Cadrant`,
  image: 'scenario/quadrant.png',
  roundLength: 5,
  endRoundScoring: [
    `2 PM si vous contrôlez plus de cadrants que l'adversaire.`,
    `1 PM si vous contrôlez le même nombre de cadrants que l'adversaire.`,
    `1 PM si vous contrôlez au moins 1 cadrant adjacent à la zone de déploiement de votre adversaire.`
  ],
  endGame: 3,
  requiredMaterial: [],
  additionnal: `
  <h2>Domaine stratégique</h2>
  <ul>
    <li>Toutes les unités non-démoralisés ont une valeur de conquête augmentée de 1.</li>
    <li>Les modificateurs de valeur de conquête (provenant des compétences et des effets) ne sont pas augmentés.</li>
</ul>
  <h2>Cadrant</h2>
  <p>Le champs de bataille, à l'exclusion des zones de déploiement, est divisé en 4 cadrants qui peuvent être contrôler
  comme s'ils étaient des objectifs, malgré l'absence de marqueur objectif.</p>
  <p>Les unités peuvent contester le contrôle d'un cadrant si leur capitaine se trouve
  dans le cadre. Un capitaine se trouvant dans plusieurs cadrant ne peut contester aucun d'entre eux.</p>
  <p><i>Même si aucun marqueur objectif n'est utilisé, un marqueur de conquête est placé dans chaque cadrant pour indiquer
 quelle compagnie le contrôle.</i></p>
  `
}];
const FEAT: Feat[] = [{
  title: 'Traque',
  requiredMaterial: [],
  scoring: `
  <p>Lorsqu’une compagnie fait progresser son indicateur de traque
jusqu’à la position « 4 » du compteur de tours, elle obtient 4 PA
et la compagnie rivale obtient un nombre de PA égal à la position
actuelle de son propre indicateur de traque moins 1.
À partir de ce moment, les unités ne peuvent plus traquer de vestiges.</p>

  <p>À la fin de la partie, si aucune compagnie n’a atteint la position « 4 » :</p>
  <ul>
    <li>Chaque compagnie obtient un nombre de PA égal à la position
    actuelle de son indicateur de traque.</li>
  </ul>
  `,
  additionnal: `
  <h2>Préparation</h2>
  <p>La compagnie qui gagne l’initiative reçoit les marqueurs d’événement 1 et 3,
la compagnie rivale reçoit les marqueurs 2 et 4.</p>
  <p>Chaque compagnie place l’un de ses marqueurs d’événement sur la
position « 1 » du compteur de tours (indicateur de traque).</p>
  <p>Après avoir déployé toutes les unités lors du déploiement, éclaireur compris, chaque compagnie,
place dans l’ordre de d'initiative son marqueur d’événement restant sur n’importe quel point du champ de bataille
situé à plus de 10 pas de sa zone de déploiement (vestige).</p>

  <h2>Traque et Vestiges</h2>
  <ul>
    <li>Les marqueurs sur le compteur de tours représentent l’indicateur de traque de chaque compagnie.</li>
    <li>Les marqueurs sur le champ de bataille représentent les vestiges.</li>
    <li>Les unités peuvent traverser un vestige mais ne peuvent pas terminer leur mouvement dessus ni y être placées.</li>
    <li>Chaque compagnie a son propre indicateur de traque et ses propres vestiges.</li>
    <li>Les compagnies ne peuvent pas interagir avec les vestiges adverses.</li>
  </ul>

  <h3>Traquer un vestige</h3>
  <p>Une unité de type Personnage, ou une unité accompagnée d’un Personnage,
qui termine son activation adjacente à un vestige de sa compagnie peut tenter de l'explorer :</p>
  <ul>
    <li>L’unité effectue un test de VOL.</li>
    <li>Les unités Éclaireurs et Embusquées ajoutent un <span class="warcrow-font-Orange"></span> à leur jet.</li>
    <li>Lors de l’étape des conversions, l’unité peut subir 1 stress pour
    ajouter 1<span class="warcrow-font-Success"></span> au résultat.</li>
    <li>Si l’unité réussit le test avec 2 <span class="warcrow-font-Success"></span>,
    la compagnie avance son indicateur de traque d’une position.
    La compagnie rivale doit alors replacer le vestige à 15 pas de sa position actuelle
    (sans le placer sur du terrain <em>Infranchissable</em>).</li>
  </ul>
  `
}, {
  title: 'Décapitation',
  requiredMaterial: [
    '2 marqueurs d’événement'
  ],
  scoring: `
  <p>À la fin de la partie, chaque compagnie obtient :</p>
  <ul>
    <li>2 PA si elle a éliminé le commandant adverse.</li>
    <li>1 PA si son propre commandant n’a pas été éliminé.</li>
    <li>1 PA si elle a éliminé la cible de son contrat.</li>
  </ul>
  `,
  additionnal: `
  <h2>Commandant</h2>
  <ul>
    <li>Les compagnies doivent déployer leur commandant lors de la phase de déploiement
    (il ne peut pas utiliser Eclaireur ou Embusqué).</li>
    <li>Si le commandant est retiré du champ de bataille par n’importe quel effet,
    il est considéré comme éliminé pour le décompte du score.</li>
    <li>Le commandant ne peut rejoindre aucune unité.</li>
  </ul>

  <h2>Contrat</h2>
  <p>Après le déploiement, chaque compagnie, dans l’ordre d'initiative, choisit une unité ennemie
comme cible de contrat (placez un marqueur sur sa carte de profil).</p>
  <ul>
    <li>La cible de contrat ne peut pas être le commandant.</li>
    <li>Si la cible quitte le champ de bataille, elle est considérée éliminée.</li>
    <li>Si une unité cible est rejointe par un Personnage, le contrat est rempli lorsque l’unité est détruite,
    même si le Personnage survit.</li>
    <li>Si une compagnie ne peut pas choisir de contrat (ex. aucune unité ennemi déployée),
    elle le choisira à la fin du round suivant.</li>
  </ul>
  `
}, {
  title: 'La Faille',
  requiredMaterial: [
    '2 marqueurs de brouillard',
    '2 marqueurs d’événement'
  ],
  scoring: `
  <p>À la fin de la partie, chaque compagnie gagne 2 PA
pour chaque marqueur de brouillard qu’elle a obtenu.</p>
  `,
  additionnal: `
  <h2>Brouillard</h2>
  <p>Après le déploiement des unités (y compris les éclaireurs),
chaque compagnie, dans l’ordre de déploiement,
place un marqueur de brouillard à plus de 20 pas
de sa zone de déploiement.</p>
  <p>Ces marqueurs appliquent les règles de Brouillard (terrain)
et sont Inamovibles.</p>

  <p>Les unités Personnages, ou unités rejointe par un Personnage,
qui terminent leur activation adjacentes à un marqueur
peuvent commencer à sceller la faille.</p>

  <h2>Sceller la Faille</h2>
  <p>L’unité effectue un test de VOL en utilisant la VOL du Personnage.
La compagnie place un marqueur d’événement sur le compteur de tours,
6 positions après celle actuelle, puis recule ce marqueur d’une position
par <span class="warcrow-font-Success"></span> obtenu.</p>
  <ul>
    <li>Les Personnages Lanceurs de sorts ajoutent un <span class="warcrow-font-Orange"></span>.</li>
  </ul>

  <p>Retirez le marqueur si :</p>
  <ul>
    <li>L’unité n’est plus adjacente au brouillard.</li>
    <li>L’unité s’active.</li>
    <li>Le Personnage est mis hors combat.</li>
    <li>Le Personnage quitte l’unité.</li>
  </ul>

  <p>Une unité ne peut pas sceller une faille déjà en cours de scellement.</p>

  <p>Lorsque le marqueur d'évènement est résolu, la compagnie obtient le marqueur de brouillard
(et le retire du champ de bataille).</p>
  `
}, {
  title: 'Bannière',
  requiredMaterial: [
    '4 marqueurs d’événement numérotés de 1 à 4'
  ],
  scoring: `
  <p>À la fin de la partie, chaque compagnie gagne :</p>
  <ul>
    <li>1 PA si la bannière adverse a été perdue au moins une fois.</li>
    <li>1 PA si elle n’a pas perdu sa propre bannière.</li>
    <li>1 PA si les deux compteurs de gloire sont sur la même position.</li>
    <li>2 PA si son compteur de gloire est plus élevé que celui de l’adversaire.</li>
  </ul>
  `,
  additionnal: `
  <h2>Préparation</h2>
  <p>La compagnie ayant l’initiative reçoit les marqueurs 1 et 3,
la rivale reçoit les marqueurs 2 et 4.</p>

  <p>Chaque compagnie place un marqueur sur la position « 1 »
du compteur (le niveau de gloire).</p>

  <p>Après le déploiement, chaque compagnie choisit une unité
déployée qui portera la bannière et place un marqueur sur sa carte.</p>

  <ul>
    <li>Les Personnages portant la bannière ne peuvent pas rejoindre une unité.</li>
    <li>Une unité portant la bannière ne peut avoir de Personnage joint.</li>
  </ul>

  <h2>Bannière</h2>
  <p>Pour chaque <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> infligé par l’unité portant la bannière,
sa compagnie avance son niveau de gloire d’une position.
Si elle atteint la position « 10 », le niveau adverse recule d’une position (jusqu'à un minimum de 1).</p>

  <h3>Bannière perdue</h3>
  <p>Si l’unité portant la bannière fuit, est détruite ou quitte le champ de bataille,
la compagnie place la bannière au sol adjacente à la position de son chef avant de retirer l’unité.</p>

  <h3>Ramasser la bannière</h3>
  <p>Toute unité alliée adjacente peut la ramasser en effectuant l’action simple
« Ramasser la bannière ».</p>
  `
}, {
  title: 'Ressources',
  requiredMaterial: [
    '2 marqueurs d’événement'
  ],
  additionnal: `
  <h2>Préparation</h2>
  <p>La compagnie ayant l’initiative reçoit le marqueur 1,
la rivale reçoit le marqueur 2.</p>

  <p>Chaque compagnie place son marqueur sur la position « 1 »
du compteur de tours (niveau de ressources).</p>

  <h2>Ressources</h2>
  <p>Les unités à plus de 12 pas de leur zone de déploiement,
et non engagées, peuvent subir 1 stress à la fin de leur activation
pour obtenir des ressources.</p>

  <h3>Obtenir des ressources</h3>
  <p>L’unité effectue un jet simple dont le nombre de dés dépend du nombre de troupes
dans l’unité (Support inclus). La compagnie avance son compteur
d’une position par <span class="warcrow-font-Success"></span> obtenu.
Si le compteur est déjà à « 10 », la compagnie fait reculer celui
de l’adversaire (min. 1) au lieu d’avancer le sien.</p>

  <p>Une compagnie ne peut obtenir des ressources qu’une fois par tour.</p>

  <p>Dés lancés :</p>
  <ul>
    <li>1 troupe : <span class="warcrow-font-Yellow"></span></li>
    <li>2–3 troupes : <span class="warcrow-font-Yellow"></span><span class="warcrow-font-Orange"></span></li>
    <li>4+ troupes : <span class="warcrow-font-Yellow"></span><span class="warcrow-font-Orange"></span><span class="warcrow-font-Red"></span></li>
  </ul>
`,
  scoring: `
  <p>À la fin de la partie, chaque compagnie obtient :</p>
  <ul>
    <li>1 PA si son compteur est à 4 ou plus.</li>
    <li>1 PA s’il est à 7 ou plus.</li>
    <li>1 PA s’il est à 10.</li>
    <li>1 PA si son compteur est plus haut que celui de l’adversaire.</li>
  </ul>
`
}];

const PERSONNAGE_UNITE = {
  title: 'Personnages et unités',
  html: `
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
      <li><b>Activation : </b>Le personnage n'hérite pas de l'activation de l'unité. Il n'a donc pas besoin de se stresser pour s'activer.</li>
    </ul>
    <p>Activez ensuite votre personnage.</p>
    <p>Si le personnage était un officier, le leader de l'unité prend la place que le personnage occupais au début de l'activation.</p>
    <p>Un personnage ne peut quitter et rejoindre une unité au cours d'une même activation.</p>
    <p>Un personnage ne peut quitter une unité occupé en combat.</p>
  `
};

const RESUME_TOUR = {
  title: 'Résumé du tour',
  html: `
    <h2>Début de la manche</h2>
    <ol>
      <li>Celui qui a l'initiative choisit qui joue en premier pendant cette manche.</li>
    </ol>
    <h2>Phase du tour</h2>
    <ol>
      <li>
        <p>Le premier joueur active une de ses unités</p>
        <ul>
          <li>L'unité peut effectuer 2 actions simples différentes, ou une action longue. L'action de mouvement est une exception et peut être sélectionnée 2 fois.</li>
          <li>Si l'unité a déjà été activée durant le tour, elle est stressée.</li>
          <li>À la fin de l'activation, vérifiez le contrôle des objectifs.</li>
        </ul>
      </li>
      <li>
        Le second joueur active une de ses unités en suivant le même processus.
      </li>
      <li>Résolvez les jetons d'événements et terminez le tour.</li>
      <li>Répétez la séquence jusqu'à ce que le dernier tour de la manche soit joué.</li>
    </ol>
    <h2>Fin de la manche</h2>
    <ol>
      <li>Appliquez les effets de « fin de manche ».</li>
      <li>Obtenez vos points de victoire (PV).</li>
      <li>
        <p>Réduisez le stress de vos unités (sauf les unités démoralisées) :</p>
        <ul>
          <li>de 1 si l'unité a été activée durant cette manche.</li>
          <li>de 2 si l'unité n'a pas été activée durant cette manche.</li>
        </ul>
      </li>
      <li>Vérifiez les effets de la Teinte.</li>
      <li><b>Personne n'est laissé pour compte.</b> Les unités non activées, non démoralisées et non engagées peuvent se déplacer.</li>
      <li>Retirez les jetons d'activation.</li>
      <li>
        <p>L'initiative change de main.</p>
        <ul>
          <li>Le joueur ayant le moins de points de victoire prend l'initiative.</li>
          <li>En cas d'égalité, l'initiative change de joueur.</li>
        </ul>
      </li>
      <li>Avancez le jeton de fin de manche selon les conditions du scénario.</li>
    </ol>
  `
};

const RESUME_OPPOSITION = {
    title: "Résumé d'un test en opposition",
    html: `
    <ol>
      <li><b>Rassemblez vos dés respectifs.</b> En cas d'attaque à distance, le défenseur ne peut pas utiliser de dé d'attaque (rouge, orange, jaune).</li>
      <li>Si une règle ou un effet vous permet d’ajouter des dés ou vous oblige à en retirer, faites-le maintenant. </li>
      <li>Si plusieurs unités sont en combat contre vous, vous devez retirez 1 dé ou symbole automatique.</li>
      <li>Le joueur défenseur déclare s'il stress son unité pour activer des modificateurs en défense.</li>
      <li>Le joueur actif déclare s'il stress son unit pour activer des modificateurs en attaque.</li>
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
  };



export const LABEL = {
  menu: {
    actions: 'Actions',
    capacites: 'Capacités',
    etats: 'États et marqueurs',
    motsClefs: 'Mots‑clefs',
    motsClefsDecors: 'Mots clef de décors',
    resumeTour: 'Résumé du tour',
    resumeOpposition: "Résumé d'une opposition",
    personnageUnite: 'Personnages et unités',
    decors: 'Décors',
    scenarios: 'Scénarios',
    feats: 'Exploit',
    teinte: 'Teinte',
    statistique: 'Statistique',
    about: 'À propos'
  },
  actions: {
    simple: 'Actions simple',
    complexe: 'Actions complexe',
    reactions: 'Réactions'
  },
  terrain: {
    name: 'Décors',
    keywords: 'Mots-clef',
    size: 'Dimensions'
  },
  scenario: {
    back: 'Retour',
    random: 'Aléatoire',
    startEncounter: 'Créer la rencontre',
    material: 'Matériel requis',
    duree: {
      title: 'Durée d\'un round',
      detail: 'Un round dure',
      turn: 'tours.'
    },
    score: {
      title: 'Score',
      detail: 'A la fin de chaque round, chaque compagnie obtient : '
    },
    end: {
      title: 'Fin de la partie',
      details: 'La partie se termine au bout de  ',
      rounds: 'rounds.'
    }
  }
}

const TEINTE_PAGE = {
  title: 'Effet de la teinte',
  html: `
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
};

export const FR = {
  ETATS,
  MOTS_CLEFS,
  ACTIONS_SIMPLES,
  ACTIONS_COMPLEXES,
  ACTIONS_REACTIONS,
  CAPACITES,
  MOTS_CLEFS_DECORS,
  DECORS,
  SCENARIO,
  FEAT,
  LABEL,
  PERSONNAGE_UNITE,
  RESUME_TOUR,
  RESUME_OPPOSITION,
  TEINTE_PAGE
};
