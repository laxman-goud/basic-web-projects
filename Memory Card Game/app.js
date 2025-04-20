let cards = [
    `<i class="fa-solid fa-truck"></i>`,
    `<i class="fa-solid fa-car"></i>`,
    `<i class="fa-solid fa-bicycle"></i>`,
    `<i class="fa-solid fa-bus"></i>`,
    `<i class="fa-solid fa-truck"></i>`,
    `<i class="fa-solid fa-car"></i>`,
    `<i class="fa-solid fa-bicycle"></i>`,
    `<i class="fa-solid fa-bus"></i>`
];

const gameBoard = document.querySelector('.game-board');
const cardsEl = document.querySelectorAll('.card');
const restart = document.querySelector('.restart');
const win = document.querySelector('.win');
let allCards = Array.from(cardsEl);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let count = 0;

const RandomizeCards = () => {
    let tempCards = [...cards];
    for (let card of allCards) {
        let randomIndex = Math.floor(Math.random() * tempCards.length);
        const iconHTML = tempCards[randomIndex];

        // Store icon in data attribute
        card.setAttribute('data-card', iconHTML);
        card.innerHTML = `<i class="fa-solid fa-question"></i>`;
        card.dataset.icon = iconHTML;

        // Reset classes
        card.classList.remove('flipped', 'matched');

        tempCards.splice(randomIndex, 1);
    }
};

const resetTurn = () => {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
};

const showCard = (e) => {
    const clicked = e.target.closest('.card');
    if (!clicked || clicked.classList.contains('flipped') || lockBoard) return;

    clicked.classList.add('flipped');
    clicked.innerHTML = clicked.dataset.icon;

    if (!firstCard) {
        firstCard = clicked;
    } else {
        secondCard = clicked;
        lockBoard = true;

        // Check for match
        const isMatch = firstCard.dataset.card === secondCard.dataset.card;

        if (isMatch) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            count++;
            resetTurn();
            if(count == 4){
                win.classList.remove('hide');
            }
        } else {
            setTimeout(() => {
                firstCard.innerHTML = `<i class="fa-solid fa-question"></i>`;
                secondCard.innerHTML = `<i class="fa-solid fa-question"></i>`;
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetTurn();
            }, 1000);
        }
    }
};

const restartGame = ()=>{
    count = 0;
    win.classList.add('hide');
    RandomizeCards();
}

gameBoard.addEventListener('click', showCard);
restart.addEventListener('click',restartGame);
RandomizeCards();
