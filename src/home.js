import gyudon from './gyudon.jpg';

const loadHome = function (){
    const content = document.querySelector('#content');

    if(document.getElementById('content').innerHTML.trim().length == 0){
        const homeImage = document.createElement('img');
        homeImage.src = gyudon;
        homeImage.id = 'home-img'

        content.appendChild(homeImage);

        const homeText = document.createElement('div');
        const homeGreeting = document.createElement('h1');
        homeGreeting.textContent = 'Welcome to Don Don!'
        const homeInfo = document.createElement('p');
        homeInfo.textContent = 
        `Don Don specializes in Japanese rice bowls influenced by the main chef's childhood.
        Our rice bowls are a taste of authentic Japanese donburi.
        Book a table today!`;
        homeText.classList.add('home-text', 'big-font');
        homeText.appendChild(homeGreeting);
        homeText.appendChild(homeInfo);

        content.style.justifyContent = 'space-evenly';
        content.appendChild(homeText);

    }
}

export default loadHome;