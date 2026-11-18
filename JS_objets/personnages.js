import Inventaire from "inventaire.js"
import Objets from "objets.js"

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class PersonnageJouable {
    constructor (nom, pts_de_vie=100, arme=ob.Main(), popularite=0, inventaire=Inventaire(), allies=[], presse=1, parti=1, giletjaune=1, syndicat=1, ajout=0, image="") {
    this.nom = nom,
    this.pts_de_vie = pts_de_vie,
    this.arme = arme,
    this.popularite = popularite,
    this.inventaire = inventaire,
    this.allies = allies,
    this.presse = presse,  
    this.parti = parti,   
    this.giletjaune = giletjaune,  
    this.syndicat = syndicat,   
    this.ajout = ajout,
    this.image = image
    }

    ajouter_popularite (type_a, pop) {
        if (type_a == 1) {
            this.ajout = int(pop*this.presse/10);
            this.popularite += int(pop*this.presse/10);
            this.presse += 5;
            this.parti = min(this.parti-5,1);
        } 
        else if (ype_a == 2) {
            this.ajout = int(pop*this.parti/10);
            this.popularite += int(pop*this.parti/10);
            this.parti += 5;
            this.giletjaune = min(this.giletjaune-5,1);
        }
        else if (type_a == 3) {
            this.ajout = int(pop*this.giletjaune/10);
            this.popularite += int(pop*this.giletjaune/10);
            this.giletjaune += 5;
            this.syndicat = min(this.syndicat-5,1);
        }
        else if (type_a == 4) {
            this.ajout = int(pop*this.syndicat/10);
            this.popularite += int(pop*this.syndicat/10);
            this.syndicat += 5;
            this.presse = min(this.presse-5,1);
        }
    }

    grosse_attaque (adversaire) {
        this.popularite += 5;
        adversaire.vie -= 2*this.arme.puissance;
    }

    attaque_simple (adversaire) {
        adversaire.vie -= this.arme.puissance;
    }

    manger () {
        pass
    }

    defense_de_base () {
        pass
    }

    choisir_arme () {
        pass
    }
};

class Ecolo extends PersonnageJouable {
    constructor (nom) {
        super (nom)
        this.popularite = 100,
        this.presse = 30,
        this.parti = 20,
        this.giletjaune = 10, 
        this.syndicat = 30, 
        this.image = "../Images/perso_ecolo.png"
    }
};

class Syndicaliste extends PersonnageJouable {
    constructor (nom) {
        super (nom)
        this.popularite = 10,
        this.presse = 20,
        this.parti = 20,
        this.giletjaune = 10, 
        this.syndicat = 50, 
        this.image = "../Images/perso_syndicaliste.png"
    }
};

class GiletJaune extends PersonnageJouable {
    constructor (nom) {
        super (nom)
        this.popularite = 5,
        this.presse = 30,
        this.parti = 10,
        this.giletjaune = 50, 
        this.syndicat = 20, 
        this.image = "../Images/perso_gilet_jaune.png"
    }
};

class BlackBloc extends PersonnageJouable {
    constructor (nom) {
        super (nom)
        this.popularite = 0,
        this.arme=Objets.Pave(),
        this.presse = 1,
        this.parti = 10,
        this.giletjaune = 30, 
        this.syndicat = 10, 
        this.image = "../Images/perso_black_bloc.png"
    }
};

class Allie {
    constructor (type_sphere, nom, popularite, question, r1, r2, r3, bonne_r, image) {
        this.type_sphere = type_sphere,
        this.nom = nom,
        this.popularite = popularite, 
        this.question = question, 
        this.r1 = r1, 
        this.r2 = r2, 
        this.r3 = r3,
        this.bonne_r = bonne_r, 
        this.image = image
    }

    rencontre (personnage) {
        meet = "Vous êtes à côté d'un allié, souhaitez-vous le rencontrer ?";
        //Ouverture d'une fenetre spéciale rencontre
    }

    presentation (personnage) {
        prez = `Bonjour, je suis ${this.nom}. Je vais vous soumettre à un interrogatoire pour vous tester.`
        //Ouverture d'une fenetre spéciale question
    }
}

class Adversaire {
    constructor (nom, coef_degats, seuil_popularite, pt_vie, image) {
        this.nom = nom,
        this.coef_degats = coef_degats, 
        this.seuil_popularite = seuil_popularite,
        this.pt_vie = pt_vie, 
        this.image = image
    }
    
    attaquer (joueur) {
        this.force = randomIntegerInRange(0, 20);
        joueur.pts_de_vie += -this.force*this.coef_degats;
    }
}