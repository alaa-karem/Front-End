"use strict";
// Cards Task Using Only Javascript:

let names = ['alaa', 'mohamed', 'shaimaa', 'ali'];
let ages = ['21', '20', '15', '9'];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center'; 

function element (name, ages){
    //elements:
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content:
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = "images/1.jpg";
    title.appendChild(head);
    age.appendChild(ageContent);

    //style:
    card.style.width = "200px";
    card.style.background = "#444";
    card.style.color = 'white';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    img.style.width = "100%";

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);

}

for(let i=0; i<4; i++)element(names[i], ages[i]);