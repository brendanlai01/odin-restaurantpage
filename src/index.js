// yo
import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function clear(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function addListeners() {
    let home = document.querySelector('#home');
    let menu = document.querySelector('#menu');
    let about = document.querySelector('#about');
    home.addEventListener('click', ()=>{
        clear();
        loadHome();
    });
    menu.addEventListener('click', ()=>{
        clear();
        loadMenu();
    });
    about.addEventListener('click', ()=>{
        clear();
        loadAbout();
    })
}

loadHome();
addListeners();