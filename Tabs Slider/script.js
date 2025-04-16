const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

const tabs = document.querySelector('.tabs');
let preTab = tab1;

const selectTab = (e)=>{
    preTab.classList.remove('active');
    e.target.classList.add('active');
    preTab = e.target;
    
}
tabs.addEventListener('click',selectTab);