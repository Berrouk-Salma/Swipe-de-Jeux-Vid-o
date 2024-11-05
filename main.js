const cards = [
    {
        image: './img/Chilling ✨.jpg',
        title: 'Titre de l\'image 1',
        description: 'Description de l\'image 1'
    },
    {
        image: './img/котики.jpg',
        title: 'Titre de l\'image 2',
        description: 'Description de l\'image 2'
    },
    {
        image: './img/téléchargement (1).jpg',
        title: 'Titre de l\'image 3',
        description: 'Description de l\'image 3'
    },
    {
        image: './img/😻.jpg',
        title: 'Titre de l\'image 4',
        description: 'Description de l\'image 4'
    },
    {
        image: './img/котики.jpg',
        title: 'Titre de l\'image 5',
        description: 'Description de l\'image 5'
    },
    {
        image: './img/téléchargement (3).jpg',
        title: 'Titre de l\'image 6',
        description: 'Description de l\'image 6'
    }
];

let currentIndex = 0;
let likedImages = [];
let deslikedImages = [];
let likeCount = 0; 
let dislikeCount = 0;  

const cardContainer = document.getElementById('card');
const summary = document.getElementById('summary');

function showCard(index) {
    cardContainer.innerHTML = '';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
        <img src="${cards[index].image}" alt="Image ${index + 1}" class="card-image show">
        <h2 class="card-title">${cards[index].title}</h2>
        <p class="card-description">${cards[index].description}</p>
    `;
    
    cardContainer.appendChild(cardContent);
}

function handleSwipe(isLiked) {
    const currentCard = cardContainer.firstChild;
    if (isLiked) {
        likedImages.push(cards[currentIndex]);
        console.log(likedImages);
        
        likeCount++;  
    } else {
        deslikedImages.push(cards[currentIndex]);
        dislikeCount++;
    }

    currentCard.classList.add(isLiked ? 'swipe-right' : 'swipe-left');

    currentCard.addEventListener('transitionend', () => {
        currentIndex++;
        if (currentIndex < cards.length) {
            showCard(currentIndex);
        } else {
            showSummary();
        }
    }, { once: true });
}

function showSummary() {
    summary.innerHTML = `<h2>Jeux Aimés :</h2>
                        <p style="background-color:white;">Likes: ${likeCount}</p>
                        <p style="background-color:white;">Dislikes: ${dislikeCount}</p>`;
    likedImages.forEach(image => {
        const item = document.createElement('div');
        item.innerHTML = `<h3>${image.title}</h3><img src="${image.image}" alt="${image.title}" style="width: 100px;">`;
        summary.appendChild(item);
    });
    const title = document.createElement('h1');
    title.innerHTML="desmicked"
    summary.appendChild(title);

    deslikedImages.forEach(image => {
        const item2 = document.createElement('div');
        item2.innerHTML = `<h3>${image.title}</h3><img src="${image.image}" alt="${image.title}" style="width: 100px;">`;
        summary.appendChild(item2);
    });
}


document.getElementById('like').addEventListener('click', () => handleSwipe(true));
document.getElementById('dislike').addEventListener('click', () => handleSwipe(false));


showCard(currentIndex);
