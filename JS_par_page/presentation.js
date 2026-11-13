let lines = [];
let index = 0;
let path_texte_presentation = "../Data/texte_presentation.txt"
let path_text_questions = "../Data/questions_presentation.txt"

async function chargerTexte(path_texte) {
    const reponse = await fetch(path_texte);

    if (!reponse.ok) {
        console.error(`Erreur ${reponse.status} : impossible de charger ${path_texte}`);
        return;
    }

    const texte = await reponse.text();
    lines = texte.split(/\r?\n/);
    console.log(lines.length);
}

function ligneSuivante() {
    if (index >= lines.length) {
        console.log("fin du texte")
    }
    console.log(lines[index]);
    document.getElementById('textePresentation').textContent = lines[index];
    index++;
}

const btnSuivant = document.getElementById('btnSuivant');

chargerTexte(path_texte_presentation);

if (btnSuivant) {
    btnSuivant.addEventListener('click', ligneSuivante);
}
