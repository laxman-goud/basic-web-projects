const tabs = document.querySelectorAll('.Tab');
const contents = document.querySelectorAll('.content');

const Tab = document.querySelector('.tabs');

let preTab = tabs[0];
let preContent = contents[0];

const selectTab = (e)=>{
    preTab.classList.remove('active-bar');
    e.target.classList.add('active-bar');    

    const index = Array.from(tabs).indexOf(e.target);
    preContent.classList.remove('active-tab');
    preContent = contents[index];
    preContent.classList.add('active-tab');
    preTab = e.target;
}

Tab.addEventListener('click',selectTab);