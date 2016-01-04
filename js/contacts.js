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
		
		  //le programme va boucler tant que le choix de l 'utisateur ne sera pas 0 
    while (choix !== 0) {
         var choix = Number(prompt("saisissez votre choix :"));
        if (choix ===1) {
             console.log("Voici la liste de vos contact : ");
     // ici je demande que le programme utilise la fonction décrire pour lister les contacts présentdans mon tableau
            contactTab.forEach(function (contact) {
            console.log(contact.decrire());    
                });
            choixOptions();            
     } else if (choix === 2) {
            var saisieNom = prompt("veuillez sasir un nouveau nom de contact :");
            var saisiePrenom = prompt("veuillez saisir son prénom :");
            nouveauContact = Object.create(Contact);
            nouveauContact.init(saisieNom, saisiePrenom);
            contactTab.push(nouveauContact);
            console.log("Le nouveau contact a été ajouté avec succès");
                    
      } else if (choix === 0) {
          console.log("Merci d'avoir utilisé le gestionnaire de contact, au revoir.");
      } else {
          console.log("Désolé, " + choix + " n'est pas une option valide");
      }
       
       
    }  
