import Arme from "objets.js"

class Inventaire {
    constructor (objets) {
        this.objets = [];
    }

    ajouter (objet_ajoute) {
        if (objet_ajoute instanceof(Arme)) {
            for (let i = 0; i<=this.objets.length; i++) {
                if (this.objets[i] instanceof(Arme)) {
                    console.log('Impossible de rajouter une arme, une est déjà présente');
                }
            }
        }
    }

    retirer (nom) {
        if (nom in this.objets) {
            delete this.objets[nom];
        }
    }

    utiliser (nom_objet, personnage) {
        if (nom_objet in this.objets && this.objets[nom_objet]) {
            objet = this.objets[nom_objet].pop(0);
            objet.utiliser(personnage);
            if (this.objets[nom_objet] == false) {
                delete this.objets[nom_objet]
            }
        }
    }

    est_vide () {
        if (this.objets.length == 0) {
            return True
        }
        return False;
    }

    tous_les_objets () {
        dict = {};
        for (let i = 0; i <= this.objets.length; i++){
            dict[`${this.objets[i]}`] = i;
        }
    }
};