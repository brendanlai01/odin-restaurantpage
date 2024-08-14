import chef from './chef.jpg';

const loadAbout = function (){
    const content = document.querySelector('#content');
    
    if(document.getElementById('content').innerHTML.trim().length == 0){
        const aboutHeader = document.createElement('div');
        const aboutInfo = document.createElement('div');
        aboutHeader.classList.add('menu-bar', 'big-font');
        aboutInfo.classList.add('about-info');

        const aboutTitle = document.createElement('h1');
        aboutTitle.textContent = 'About Us';
        aboutTitle.style.marginBottom = 0;

        let hours = createList();
        aboutHeader.append(aboutTitle, hours);
        aboutHeader.style.marginBottom = '0';

        const img = document.createElement('img');
        img.src = chef;
        aboutInfo.appendChild(img);

        const aboutText = document.createElement('h4');
        aboutText.textContent = `Don Don is a Japanese restaurant specializing in Japanese rice bowls, known as, Donburi. 
        Our menu is limited to a few items to help preserve our quality and presentation for our customers. 
        Donburi is not just food, but an experience to enjoy whether it be with a group or by yourself. 
        Come join us today!`;
        aboutInfo.appendChild(aboutText);

        content.style.justifyContent = 'center';
        content.append(aboutHeader, aboutInfo);
    }
}

function createList(){

    const br = document.createElement('br');
    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursText = document.createElement('h4');
    hoursText.textContent = 'Hours of Operation';
    hours.appendChild(hoursText);

    const hoursList = document.createElement('ul');
    hours.appendChild(hoursList);

    const monLi = document.createElement('li');
    const monSpan = document.createElement('span');
    const monP = document.createElement('p');
    monSpan.textContent = 'Monday:';
    monP.textContent = 'Closed';
    monLi.append(monSpan, br, monP);

    const tueWedThuLi = document.createElement('li');
    const tueWedThuSpan = document.createElement('span');
    const tueWedThuP = document.createElement('p');
    tueWedThuSpan.textContent = 'Tuesday, Wednesday, Thursday:';
    tueWedThuP.textContent = '2:30PM - 10:30PM';
    tueWedThuLi.append(tueWedThuSpan, br, tueWedThuP);

    const friSatLi = document.createElement('li');
    const friSatSpan = document.createElement('span');
    const friSatP = document.createElement('p');
    friSatSpan.textContent = 'Friday, Saturday:';
    friSatP.textContent = '2:30PM - 11:30PM';
    friSatLi.append(friSatSpan, br, friSatP);

    const sunLi = document.createElement('li');
    const sunSpan = document.createElement('span');
    const sunP = document.createElement('p');
    sunSpan.textContent = 'Sunday:';
    sunP.textContent = '2:30PM - 9:30PM';
    sunLi.append(sunSpan, br, sunP);

    hoursList.append(monLi,tueWedThuLi,friSatLi,sunLi);

    return hours;
}

export default loadAbout;