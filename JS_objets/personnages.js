import Inventaire from "inventaire.js"

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

};

class GiletJaune extends PersonnageJouable {

};

class BlackBloc extends PersonnageJouable {

};