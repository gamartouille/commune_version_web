/*
let path_gilet_jaune = "../Images/gilet_jaune.jpeg"
let path_black_bloc = "../Images/black_bloc.jpeg"
let path_syndicaliste = "../Images/syndicaliste.jpg"
let path_journaliste = "../Images/journaliste_tf1.jpg"
*/

const syndicalisteCheckbox = document.querySelector('syndicalisteCheckbox')
const giletjauneCheckbox = document.querySelector('giletjauneCheckbox')
const blackblocCheckbox = document.querySelector('blackblocCheckbox')
const journalisteCheckbox = document.querySelector('journalisteCheckbox')

syndicalisteCheckbox.addEventListener('change', (event) => {
    if (event.syndicalisteCheckbox.checked) {
        event.preventDefault();
        const perso = new FormData(syndicalisteCheckbox);
        const donnees = Object.fromEntries(perso.entries());
        localStorage.setItem('Perso', JSON.stringify(donnees));
        console.log('Perso sauvegardé :', donnees);
    }
})

giletjauneCheckbox.addEventListener('change', (event) => {
    if (event.giletjauneCheckbox.checked) {
        event.preventDefault();
        const perso = new FormData(giletjauneCheckbox);
        const donnees = Object.fromEntries(perso.entries());
        localStorage.setItem('Perso', JSON.stringify(donnees));
        console.log('Perso sauvegardé :', donnees);
    }
})

blackblocCheckbox.addEventListener('change', (event) => {
    if (event.blackblocCheckbox.checked) {
        event.preventDefault();
        const perso = new FormData(blackblocCheckbox);
        const donnees = Object.fromEntries(perso.entries());
        localStorage.setItem('Perso', JSON.stringify(donnees));
        console.log('Perso sauvegardé :', donnees);
    }
})

journalisteCheckbox.addEventListener('change', (event) => {
    if (event.journalisteCheckbox.checked) {
        event.preventDefault();
        const perso = new FormData(journalisteCheckbox);
        const donnees = Object.fromEntries(perso.entries());
        localStorage.setItem('Perso', JSON.stringify(donnees));
        console.log('Perso sauvegardé :', donnees);
    }
})

const donneesSauvegardees = JSON.parse(localStorage.getItem('Perso'));
if (donneesSauvegardees) {
console.log('Perso récupéré : ', donneesSauvegardees);
}