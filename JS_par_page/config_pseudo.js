const pseudoForm = document.getElementById('pseudoForm');

pseudoForm.addEventListener('submit', function(event) {
  // 1. Empêcher le rechargement de la page
  event.preventDefault();

  // 2. Récupérer les données du formulaire sous forme d'objet
  const pseudo = new FormData(pseudoForm);
  const donnees = Object.fromEntries(pseudo.entries());

  // 3. Stocker dans le localStorage (conversion en texte JSON obligatoire)
  localStorage.setItem('Pseudo', JSON.stringify(donnees));

  console.log('Pseudo sauvegardé :', donnees);
});

// 4. Pour récupérer les données plus tard (ex: au chargement de la page)
const donneesSauvegardees = JSON.parse(localStorage.getItem('Pseudo'));
if (donneesSauvegardees) {
  console.log('Pseudo récupéré : ', donneesSauvegardees);
}