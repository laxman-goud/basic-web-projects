const buttons = document.querySelector('.buttons');

// All cards and their bars
const successCard = document.querySelector('.success-card');
const warnCard = document.querySelector('.warning-card');
const wrongCard = document.querySelector('.invalid-card');

const successBar = successCard.querySelector('.bar');
const warnBar = warnCard.querySelector('.bar');
const wrongBar = wrongCard.querySelector('.bar');

const resetBars = () => {
    // 🔥 Reset bar widths to 0
    successBar.style.transition = 'none';
    warnBar.style.transition = 'none';
    wrongBar.style.transition = 'none';

    successBar.style.width = '0%';
    warnBar.style.width = '0%';
    wrongBar.style.width = '0%';

    // 🔥 Force reflow to allow animation again
    void successBar.offsetWidth;
    void warnBar.offsetWidth;
    void wrongBar.offsetWidth;

    // 🔥 Re-enable transition
    successBar.style.transition = 'width 2.5s ease';
    warnBar.style.transition = 'width 2.5s ease';
    wrongBar.style.transition = 'width 2.5s ease';
};

const btnClicked = (e) => {
    const clicked = e.target.innerText;

    // 🔥 Hide all cards
    successCard.classList.add('hide');
    warnCard.classList.add('hide');
    wrongCard.classList.add('hide');

    // 🔥 Reset all bars
    resetBars();

    // 🔥 Show and animate the selected card
    if (clicked === 'Success') {
        successCard.classList.remove('hide');
        setTimeout(() => {
            successBar.style.width = '100%';
        }, 50);
    } else if (clicked === 'Invalid') {
        warnCard.classList.remove('hide');
        setTimeout(() => {
            warnBar.style.width = '100%';
        }, 50);
    } else if (clicked === 'Error') {
        wrongCard.classList.remove('hide');
        setTimeout(() => {
            wrongBar.style.width = '100%';
        }, 50);
    }
};

buttons.addEventListener('click', btnClicked);
