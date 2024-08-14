
const loadMenu = function (){
    const content = document.querySelector('#content');

    if(document.getElementById('content').innerHTML.trim().length == 0){
        const menuTitle = document.createElement('div');
        const menuItems = document.createElement('div');
        menuTitle.classList.add('menu-bar', 'big-font');
        menuItems.classList.add('menu-items');

        const menuHeader = document.createElement('h1');
        menuHeader.textContent = 'Our Menu';
        menuTitle.appendChild(menuHeader);


        const foodOne = document.createElement('div');
        const foodTwo = document.createElement('div');
        const foodThree = document.createElement('div');
        const foodFour = document.createElement('div');

        foodOne.classList.add('food-item', 'center-align');
        foodTwo.classList.add('food-item', 'center-align');
        foodThree.classList.add('food-item', 'center-align');
        foodFour.classList.add('food-item', 'center-align');

        const wagyu = document.createElement('img');
        wagyu.src = 'https://jeccachantilly.com/wp-content/uploads/2022/04/steak-donburi-rice-bowl-3.jpg';
        const katsu =  document.createElement('img');
        katsu.src = 'https://tiffycooks.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-26-at-12.35.22-AM.png';
        const gyudon =  document.createElement('img');
        gyudon.src = 'https://www.justonecookbook.com/wp-content/uploads/2022/04/Gyudon-7476-III.jpg';
        const ikura =  document.createElement('img');
        ikura.src = 'https://www.seriouseats.com/thmb/HDtwQpB1s2sa5IQS5umSgX7dbHA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__10__20170922-ikura-don-vicky-wasik-7-6858d2ea56f64811a2e0cf40c371f634.jpg';

        const wagyuTitle = document.createElement('h3');
        wagyuTitle.textContent = 'Wagyu Don';
        const katsuTitle = document.createElement('h3');
        katsuTitle.textContent = 'Chicken Katsu Don';
        const gyudonTitle = document.createElement('h3');
        gyudonTitle.textContent = 'Gyudon';
        const ikuraTitle = document.createElement('h3');
        ikuraTitle.textContent = 'Ikura Don';

        const wagyuInfo = document.createElement('p');
        wagyuInfo.textContent = 'White rice with A5 Wagyu imported from Kobe, Japan.';
        const katsuInfo = document.createElement('p');
        katsuInfo.textContent = 'White rice with our hand breaded fried chicken cutlet.';
        const gyudonInfo = document.createElement('p');
        gyudonInfo.textContent = 'White rice with beef and onions simmered in a mildy sweet sauce.';
        const ikuraInfo = document.createElement('p');
        ikuraInfo.textContent = 'White rice with salmon roe and salmon sashimi topped with seaweed and wasabi.';

        foodOne.append(wagyu, wagyuTitle, wagyuInfo);
        foodTwo.append(katsu, katsuTitle, katsuInfo);
        foodThree.append(gyudon, gyudonTitle, gyudonInfo);
        foodFour.append(ikura, ikuraTitle, ikuraInfo);

        menuItems.append(foodOne, foodTwo, foodThree, foodFour);
        content.style.justifyContent = 'center';
        content.append(menuTitle, menuItems);
    }
}

export default loadMenu;