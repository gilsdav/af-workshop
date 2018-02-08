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

## Pratique

Dynamisez la partie product-item afin de pouvoir
* Prévisualiser le détail d'une pizza
* Créer une pizza
* Modifier une modifier
* Supprimer une pizza
* Interdir l'accès direct (sans passer par la liste) de la page de détail

Utilisez le système de "reactive form" afin de rester immutabile.
