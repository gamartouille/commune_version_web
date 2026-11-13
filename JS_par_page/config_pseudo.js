let path_texte_config_pseudo = "../Data/texte_config_pseudo.txt"

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
