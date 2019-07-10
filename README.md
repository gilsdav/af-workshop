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

## À respecter ##
* Utilisez le système de "***reactive form***" afin de rester immutable.
* Les composants d'affichages (dossier components) ne doivent gérer que le visuel (pas d'appels services). Faites plutôt cela dans les pages (dossier containers).

## Mise en pratique

But du jeu: tous les composants d'un product-item existent (à utiliser pour les points 1 à 4). Cela ne veut pas dire qu'ils existent dans le contexte d'Angular.
Rendez-les utilisables et dynamisez-les afin de pouvoir:

### 1. Prévisualiser les détails d'une pizza ###

Etapes:
  * Affichage de la pizza mokée
  * Démokage de l'affichage de la pizza (images)
  * Ajout d'un formulaire pour l'input name
  * Gestion des erreurs de l'input
  * Ajout de la liste des toppings
  * Calcul de la sélection des toppings et appliquer le style (class active)

### 2. Modifier une pizza ###

Etapes:
  * Impacter les changements de sélection de toppings sur la pizza
  * Masquer le bouton "create pizza" dans le contexte d'une mise à jour
  * Appel service de mise à jour (ne pas oublier de récupérer le nom et de vérifier ça validité)
  * Redirection vers la page products

### 3. Créer une nouvelle pizza ###

Etapes:
  * Masquer le bouton "update pizza" et "delete pizza" dans le contexte d'une création
  * Appel service de création
  * Redirection vers la page products

### 4. Supprimer une pizza ###

Etapes:
  * Demande de confirmation (en utilisant la modal de Angular Material)
  * Appel service de suppression si la réponse est oui
  * Redirection vers la page products

### 5. Interdir l'accès direct (sans passer par la liste) de la page de détail ###

Etapes:
  * Création d'un service qui va permettre de stocker l'information (productsAccessed)
  * Modification de la valeur dans le composant products
  * Création d'un guard canActivate qui vérifie cette valeur

### 6. Créer une nouvelle feature appelée `profile` qui ne fait qu'afficher `Bonjour toi !` ###

Elle doit:
  * Être chargée en LazyLoading
  * Être accessible depuis la barre de navigation (à droite de `Products`).

  Etapes:
  * Création d'un nouveau module (profile.module)
  * Création d'un composant container
  * Création d'un composant d'affichage
  * Création d'un routing basique

![Zozor](https://www.letscode.hu/img/letscodelogo190.png)
