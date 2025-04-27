const okEl = document.querySelector('.ok');
const submitEl = document.querySelector('.submit');
const popWindow = document.querySelector('.pop-up');

const submitClicked = ()=>{
    popWindow.classList.remove('hide');
    submitEl.classList.add('hide');
}
const okClicked = ()=>{
    popWindow.classList.add('hide');
    submitEl.classList.remove('hide');
}

submitEl.addEventListener('click',submitClicked);
okEl.addEventListener('click',okClicked);