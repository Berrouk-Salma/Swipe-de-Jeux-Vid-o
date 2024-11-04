const cardElement = document.getElementById('card');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');
const summaryElement = document.getElementById('summary');

let likedGames = [];

likeButton.addEventListener('click', () => {
    likedGames.push(cardElement.querySelector('.card-title').textContent);
    updateCard();
});

dislikeButton.addEventListener('click', () => {
    updateCard();
});

function updateCard() {
    // Logique pour mettre à jour la carte
    // Pour l'instant, on va juste changer le texte
    cardElement.querySelector('.card-title').textContent = "Titre du Nouveau Jeu";
    cardElement.querySelector('.card-description').textContent = "Nouvelle Description.";
    
    // Mise à jour du résumé
    updateSummary();
}

function updateSummary() {
    if (likedGames.length > 0) {
        summaryElement.innerHTML = `<strong>Jeux Aimés :</strong> ${likedGames.join(', ')}`;
    } else {
        summaryElement.innerHTML = '';
    }
}
