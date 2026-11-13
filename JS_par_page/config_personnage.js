let path_gilet_jaune = "../Images/gilet_jaune.jpeg"
let path_black_bloc = "../Images/black_bloc.jpeg"
let path_syndicaliste = "../Images/syndicaliste.jpg"
let path_journaliste = "../Images/journaliste_tf1.jpg"

async function chargerTexte(path_texte) {
    const reponse = await fetch(path_texte);

    if (!reponse.ok) {
        console.error(`Erreur ${reponse.status} : impossible de charger ${path_texte}`);
        return;
    }

    const texte = await reponse.text();
    lines = texte.split(/\r?\n/);
    while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
        lines.pop();
    }
    console.log(lines.length);
}
