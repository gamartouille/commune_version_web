function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

class Objets {
    constructor (nom, image, position) {
        this.nom = nom,
        this.image = image,
        this.position = position
    }

    utiliser (personnage) {
        console.log('pass');
    }
    
    ajouter_a_inventaire (personnage) {
        personnage.inventaire.ajouter(this);
    }

    laisser () {
        console.log(`${this.nom} est laissé sur place`);
    }
};

class Arme extends Objets {
    constructor (nom, image, position, puissance, nb_coups) {
        super(nom, image, position),
        this.puissance = puissance,
        this.nb_coups = nb_coups
    }

    attaquer () {
        if (this.nb_coups > 0) {
            this.nb_coups -= 1;
        }
        else {
            console.log(`Il n'y a plus de coups possible avec l'arme ${this.nom}`);
        }
    }

    utiliser (personnage) {
        personnage.arme = this;
        console.log(`L'arme ${this.nom} a été équipée`);
    }
};

class FlashBall extends Arme {
    constructor (nom, image, position, puissance, nb_coups) {
        super(nom = "FlashBall", image="../Images/flashball.jpeg", position=[getRandomFloat(48.852202, 48.854009), getRandomFloat(2.349031, 2.365510)], puissance=20, nb_coups=5)
    }
};

class Matraque extends Arme {
    constructor (nom, image, position, puissance, nb_coups) {
        super(nom = "Matraque", image="../Images/matraque.jpeg", position=[getRandomFloat(48.852202, 48.854009), getRandomFloat(2.349031, 2.365510)], puissance=15, nb_coups=5)
    }
};

class Pave extends Arme {
    constructor (nom, image, position, puissance, nb_coups) {
        super(nom = "Pave", image="../Images/pave.jpeg", position=[getRandomFloat(48.852202, 48.854009), getRandomFloat(2.349031, 2.365510)], puissance=5, nb_coups=5)
    }
};

class PiedDeBiche extends Arme {
    constructor (nom, image, position, puissance, nb_coups) {
        super(nom = "PiedDeBiche", image="../Images/pied_biche.jpeg", position=[getRandomFloat(48.852202, 48.854009), getRandomFloat(2.349031, 2.365510)], puissance=10, nb_coups=5)
    }
};

class Nourriture extends Objets{
    constructor (nom, soin, image, position = None) {
        super(nom, image, position)
        this.soin = soin
    }

    utiliser (personnage) {
        personnage.pts_de_vie += this.soin;
        console.log(`${personnage.nom} recupère ${this.soin} points de vie`);
    }
};

class Baguette extends Nourriture {
    constructor () {
        super(nom="Baguette", soin=5, image="../Images/baguette.png")
    }
};

class BarreCereale extends Nourriture {
    constructor () {
        super(nom="Barre de céréale", soin=8, image="../Images/barre_cereale.png")
    }
};

class Muesli extends Nourriture {
    constructor () {
        super(nom="Muesli", soin=4, image="../Images/muesli.png")
    }
};

class Pomme extends Nourriture {
    constructor () {
        super(nom="Pomme", soin=3, image="../Images/pomme.png")
    }
};

class Sandwich extends Nourriture {
    constructor () {
        super(nom="Sandwich", soin=9, image="../Images/sandwich.png")
    }
};

class Steak extends Nourriture {
    constructor () {
        super(nom="Steak Végé", soin=5, image="../Images/steak_vege.png")
    }
};

class Booster extends Objets {
    constructor (nom, popularite_bonus, image) {
        super(nom, image)
        this.popularite_bonus = popularite_bonus
    }

    utiliser (personnage) {
        groupe = this.nom;
        personnage.ajouter_popularite(groupe, this.popularite_bonus);
    }
};

class Badge extends Booster {
    constructor () {
        super(nom="Badge CGT", popularite_bonus=5, image="../Images/badge.png")
    }
};

class CarteDePresse extends Booster {
    constructor () {
        super(nom="Carte de presse", popularite_bonus=5, image="../Images/carte_presse.png")
    }
};

class Mégaphone extends Booster {
    constructor () {
        super(nom="Mégaphone", popularite_bonus=5, image="../Images/megaphone.png")
    }
};

class MicroTele extends Booster {
    constructor () {
        super(nom="Interview France TV", popularite_bonus=8, image="../Images/micro_france_tv.png")
    }
};
