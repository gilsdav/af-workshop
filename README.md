# AfWorkshop (Angular Fundamentals Workshop)

![Zozor](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png)

## Development server

Exécutez la commande `npm start` pour démarrer les serveurs.
Naviguez sur http://localhost:4200/. L'application va automatiquement se recharger quand vous ferez des changements dans le code.

L'API Rest est disponible à l'adresse `http://localhost:3000/`

## Questions

* Y a-t-il quelque chose qui est en lazy loading (chargé séparément de l'AppModule) ?
  * Si oui, quoi ?
* Comment transmet-on la pizza sélectionnée de la page product vers la page product-item ?
* Comment gère-t-on la baseUrl du client Rest ?
* Que voit-on quand on entre une mauvaise URL (exemple: `http://localhost:4200/coucou`) et pourquoi ?

## Mise en pratique

But du jeu: tous les composants d'un product-item existent (à utiliser pour les points 1 à 4). Cela ne veut pas dire qu'ils existent dans le contexte d'Angular.
Rendez-les utilisables et dynamisez-les afin de pouvoir:

1. Prévisualiser les détails d'une pizza
2. Modifier une modifier
3. Créer une nouvelle pizza
4. Supprimer une pizza
5. Interdir l'accès direct (sans passer par la liste) de la page de détail
6. Créer une nouvelle feature appellée `profile` qui ne fait qu'afficher `Bonjour toi !`
    * Elle doit être chargée en LazyLoading
    * Elle doit être accessible depuis la bare de navigation (à droite de `Products`).

À respecter:
* Utilisez le système de "***reactive form***" afin de rester immutabile.
* Les composants d'affichages (dossier components) ne doivent gérer que le visuel (pas d'appels services). Faites plutôt cela dans les pages (dossier containers).

![Zozor](https://www.letscode.hu/img/letscodelogo190.png)
