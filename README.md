# AfWorkshop (Afelio Fundamentals Workshop)

## Development server

Exécuter la commande `npm start` pour démarrer les serveurs.
Naviguez sur http://localhost:4200/. L'application va automatiquement se recharger quand vous ferez des changements dans le code.

L'API Rest est disponible à l'adresse `http://localhost:3000/`

## Questions

* Y a t'il quelque chose qui est en lazy loading ?
  * Si oui, quoi ?
* Comment passe t'on la sélectionnée ?
* Comment gère-t'on la baseUrl du client Rest ?
* Que voit-on quand on entre une mauvaise URL (exemple: `http://localhost:4200/coucou`) et pourquoi ?

## Mise en pratique

Dynamisez la partie product-item afin de pouvoir
1) Prévisualiser le détail d'une pizza
2) Créer une pizza
3) Modifier une modifier
4) Supprimer une pizza
5) Interdir l'accès direct (sans passer par la liste) de la page de détail
6) Créer une nouvelle feature appellée `profile` qui ne fait qu'afficher `Bonjour toi !`
   * Elle doit être chargée en LazyLoading
   * Elle doit être accessible depuis la bare de navigation (à droite de `Products`).

Utilisez le système de "reactive form" afin de rester immutabile.
