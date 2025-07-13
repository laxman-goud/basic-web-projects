const toggle = document.querySelector('.header-toggle');
const theme = document.querySelector('.theme-btn');

const sideBar = document.querySelector('.navbar')

let toggled = true;
const toggleBar = ()=>{
    if(toggled){
        sideBar.classList.add('hide');
        sideBar.classList.remove('active');
        toggled = false;
    }
    else{
        sideBar.classList.remove('hide');
        sideBar.classList.add('active');
        toggled = true;
    }
}

toggle.addEventListener('click',toggleBar);