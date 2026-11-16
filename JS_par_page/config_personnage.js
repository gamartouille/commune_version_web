/*
let path_gilet_jaune = "../Images/gilet_jaune.jpeg"
let path_black_bloc = "../Images/black_bloc.jpeg"
let path_syndicaliste = "../Images/syndicaliste.jpg"
let path_journaliste = "../Images/journaliste_tf1.jpg"
*/

const personnageCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][id$="Checkbox"]'
)

personnageCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const personnageCheckbox = event.currentTarget
        if (personnageCheckbox.checked) {
            const donnees = { personnage: personnageCheckbox.id }
            localStorage.setItem('Perso', JSON.stringify(donnees))
            console.log('Perso sauvegardé :', donnees)
        }
    })
})

const donneesSauvegardees = JSON.parse(localStorage.getItem('Perso'));
if (donneesSauvegardees) {
console.log('Perso récupéré : ', donneesSauvegardees);
}