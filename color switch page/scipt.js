const submitEl = document.querySelector('.submit');
const loginEl = document.querySelector('.login');
function changeColor(color){
    document.body.style.background = color;
    loginEl.style.borderColor = color;
    submitEl.style.background = color;
    let prev = document.querySelector('.active');
    prev.classList.remove('active');
    event.target.classList.add('active');
    prev = event.target;
}