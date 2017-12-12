private searchTerms = new Subject<string>(); // Création du subject

public search(value) {
  this.searchTerms.next(value); // Mise à jour de la valeur du subject
}

this.searchTerms.pipe(
  ... // Liste de fonction a invoquer à chaque fois que le subject est mis à jour.
);
