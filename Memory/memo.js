window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000);
});
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    
    if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
        header.classList.remove('hide');
    } else if (currentScroll > lastScroll && currentScroll > 60) {
        header.classList.add('hide');
    }

    lastScroll = currentScroll;
});

// Game variables and functions
const gridContainer = document.querySelector(".grid-container");
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

const cardsData = [
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1656614772/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/dayot_upamecano.png",
        "name": "Dayot Upamecano"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1689695039/cms/public/images/fcbayern-com/players/spielerportraits/teaser/minjae-kim.png",
        "name": "Minjae Kim"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1704991485/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/eric-dier.png",
        "name": "Eric Dier"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1691827799/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/harry-kane.png",
        "name": "Harry Kane"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1627302829/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/kingsley_coman.png",
        "name": "Kingsley Coman"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1726228393/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/michael-olise.png",
        "name": "Michael Olise"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1693309386/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/christoph-freund.png",
        "name": "Christoph Freund"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1656614128/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/josip_stanisic.png",
        "name": "Josip Stanisic"
    },
    {
        "image": "https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_1:1,c_fill,g_custom,w_768,dpr_2/v1719763484/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/manuel_neuer.png",
        "name": "Manuel Neuer"
    }
];

const cards = [...cardsData, ...cardsData];
shuffleCards();
generateCards();

function shuffleCards() {
    let currentIndex = cards.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
}

function generateCards() {
    gridContainer.innerHTML = "";
    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src="${card.image}" alt="${card.name}" />
            </div>
            <div class="back"></div>
        `;
        cardElement.addEventListener("click", flipCard);
        gridContainer.appendChild(cardElement);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains("flipped")) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    generateCards();
}