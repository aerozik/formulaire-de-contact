var Contact = {
    // Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
        // Renvoie la description du contact
    decrire: function () { 
        var description = "Nom : " + this.nom + ", " + "Prénom : " + this.prenom;
        return description;
    }
};

var contact1 = Object.create(Contact); //creation d'un objet
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact); //creation d'un autre objet
contact2.init("Nelsonne", "Mélodie");


var contactTab = []; // creation d'un tableau de contact
    contactTab.push(contact1);
    contactTab.push(contact2);


// création d'un fonction qui liste le choix des options.
function choixOptions() {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter le gestionnaire de contact");
    
}

        

        console.log("Bienvenue dans le gestionnaire des contacts !");
        choixOptions();