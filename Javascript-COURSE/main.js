"use strict";
/*   From Lesson 1 to 15 :

// print in Javascript: 
document.write('<p>test</p>')
document.write('<p>test</p>')
document.write('<p>test</p>')
document.write('<p>test</p>')


//Datatype:

document.write(typeof 10);

let x = "alaa";
let y = 21;

console.log(`My Name Is ${x} and My Age Is ${y}`);

//Convert string to number, write(+) before it
let num1=5;
let num2=4;
console.log('num1' ** 'num2');     // NaN, Not a Number is a (number) in javascript
console.log('5' ** '4');          // 625
console.log(+'5' + +'4')   // 9

//Program to calculate Zakat on money:
// let zakat = window.prompt();
// console.log(.025 * zakat);

*/ 
//////////////////////////////////////////////////////////////////////////////////////

/* From Lesson 16 to 30 :


let name = "alaa ";
console.log(name.repeat(10));
console.log(name.indexOf('a'));       // Search in string   0
console.log(name.lastIndexOf('a'))   // 3 the last letter a    & if letter not exist return -1
//console.log(name.include('a'));   // return True(if letter is found) or False(if letter not exist) 
let name2="I Love Javascript";
console.log(name2.slice(-6,-4));
console.log(name2.substring(2,4));       // it's accept only positive integer


// Arrays:
let n = ["alaa", "ali", "shaimaa", "mohamed"];
console.log(n[0]);
n.push("asmaa");            // Add element in the end of array
console.log(n);            // ["alaa", "ali", "shaimaa", "mohamed", "asmaa"]
n.unshift('mariam');      // Add element in the start of array
console.log(n);          // ["mariam", "alaa", "ali", "shaimaa", "mohamed", "asmaa"]

n.shift();              // Remove element from the start of array
console.log(n);        // // ["alaa", "ali", "shaimaa", "mohamed", "asmaa"]
n.pop()               // Remove element from the Last of array
console.log(n);      // ["alaa", "ali", "shaimaa", "mohamed"]

// Remove element from any index in array==> splice(position, nElement)
n.splice(1,2);
console.log(n);
// Remove element from any index in array and add elements==> splice(position, nElement, 'element1', 'element2')
n.splice(1,0,'ali','shaimaa');
console.log(n);

// let m = [1, 2, 4, [1,5,6], "alaa", undefined, null];
// let m2 = [1, 2, [1,2,3]];
// console.log(m2[2]);

// (==) ---> compare values each other however its datatypes as (5=='5')--> true & But (===) compares values and datatypes
console.log(5=='5');  // true
console.log(5==='5') // false

// if & if..else & switch 

 */

//////////////////////////////////////////////////////////////////////////////////////

/* From Lesson 31 to 47 :

//Function:
function print(){
    console.log("Hello World");
}
print();
// Hoistingff

// Function calls itself:
(    function()
{
    console.log('hello');
})();

//
function calc(...numbers)
{
    for(let i=0; i<numbers.length; i++)console.log(numbers[i]);
}
calc(1,3,5);

//  Arrow Function():
let x = ()=>{
    return 1;
}
console.log(x());
        // if there is only one statement, you may delete return:
let y = ()=> "Hello";
console.log(y())
        // if there is no parameter or one parameter, you may delete ():
let z = _=>2;
let z2 = num =>num*2;
console.log(z());
console.log(z2(5));

// Object In Javascript:
let user = {
    firstName: 'alaa',
    lastName: 'karem',
    email: 'alaakdaksdjkasd@gmail.com',
    age: 21,
    skills: ['html', 'css', 'js'],
    active: true,
    phoneNumber: {
        first: '01075835567',
        second: '01298743326'
    },
    address: {
        Egypet: 'Sadat',
        uae: 'abudhabi',
    },

    isActive: function(){
        if(user.active==true)
        {
            return 'hello user';
        }
        else
        {
            return 'sorry you are not active';
        }
    },

    getAge: function(){
        if(user.age>=18)
        {
            return 'available';
        }
        else
        {
            return 'unavailable';
        }
    },
    
    getName: function(){
        return user.firstName;
        //return this.firstName;
    }
};
console.log(user.isActive());


    // Object.create(): create new object from an old object:

let user1 = {
    name: 'alaa',
    getName:function(){
        return `hello ${this.name}`;
    },
};
let user2 = Object.create(user1);
user2.name='ali';
console.log(user2.getName());

    // Assign many objects in one object:
let a1 = {
    num1: 1,
};
let a2 = {
    num2: 2,
};
let a3 = {
    num3: 3,
};
let a4 = Object.assign(a1, a2, a3);
console.log(a4.num2);

*/

//////////////////////////////////////////////////////////////////////////////////////

/* From Lesson 48 to 53 :


    // DOM -> Document Object Model:
let x = document.getElementById('head');
let y = document.getElementsByClassName('head2')[0];
//let z = document.getElementsByTagName('h1')[1];
let head = document.querySelectorAll('#head')[0];
//document.links;
//document.images;
//document.forms;

let body = document.body;
body.style.background='#eee';

x.style.color='red';
console.log(x);

y.style.color='green';
console.log(y);

head.style.color='blue';


    // Attripute:
let img = document.getElementById('img');
console.log(img.alt);

    // Outer&Inner:
let container = document.getElementById('container');
console.log(container.outerHTML);
console.log(container.innerHTML);

container.outerHTML = '<p>Hello</p>';

    // sibling and parent:
let element = document.getElementById('second');
console.log(element.previousElementSibling);
console.log(element.parentElement);


let container = document.getElementById('container');
container.innerText ='Hello World';
container.style.backgroundColor = '#444';
container.style.color = '#fff';
container.style.padding = '10px';
container.style.borderLeft = '4px solid #fa0';
// container.style.cssText = 'color:red';
    //Remove Property:
container.style.removeProperty('color');
    //Set Property:
container.style.setProperty('color','green','important');

*/
//Bla Bla Bla Bla Bla
/* 
// Create Element:
let container = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');
// Create Content:
let content = document.createTextNode('hello world');
head.appendChild(content);
img.src='images/1.jpg';
img.style.width = '100px';
// Add Element in a specific place:
container.appendChild(head);
container.appendChild(img)
document.body.appendChild(container);
console.log(container);

let today = new Date();
document.getElementById('test').innerHTML=today;
console.log(today);

//

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
console.log(`Data is: ${day}  / ${month} / ${year}`);

*/
//////////////////////////////////////////////////////////////////////////////////////

/* From Lesson 55 to 62 :


// Events:

// function hello(){
//     console.log('Hello');
// }


/* 
let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     console.log('clicked');
// });

btn.onmouseup = function(){
    console.log('hello');
};
btn.onmouseover = function(){
    console.log('hello');
};
btn.onmouseout = function(){
    console.log('hello');
};

let inp = document.getElementById('inp');

let i=1;
inp.onkeyup = function(){
    console.log('click' + i++);
};

inp.onkeydown = function(){
    console.log('click' + i++);
};

inp.onfocus = function(){
    inp.style.border = '2px solid red';
}
inp.onblur = function(){
    inp.style.border = 'none';
}
*/
/*  Before and After:
let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');

container.style.backgroundColor = '#ffa';
container.style.height = '50px';

after.onclick = function(){
    container.after(content)
}
before.onclick = function(){
    container.before(content)
}
append.onclick = function(){
    container.appendChild(content)
}
*/

/* Remove and Toggle Classes: 
let hello = document.getElementById('hello')

hello.onclick=function(){
    hello.classList.add('name');
}

hello.oncontextmenu=function(){
    hello.classList.remove('name');
}

hello.oncontextmenu=function(){
    hello.classList.toggle('name');
}
*/
/* 
// Auto Event:
let txt = document.getElementById('txt');
let myBtn = document.getElementById('btn')
    // Auto Focus:
window.onload = function(){
    //txt.focus();
    //myBtn.click();
    txt.value = 'test';
}

myBtn.onclick = function(){
    myBtn.style.background = '#ffa';
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/* From Lesson 62 to 68 :


// BOM -> Browser Object MOdel: how js calls browser.

    // Scroll:
     //window.scroll(200,400);         // Turn from left to right and from top to bottom
    //window.scrollBy(200,400);      // Turn from Your Place -> from left to right and from top to bottom  
    // scrollX and scrollY -> return your place (now)

    let btn = document.getElementById('btn');

    window.onscroll = function(){
        if(scrollY >=400)
        {
            btn.style.display = 'block';
        }
        else
        {
            btn.style.display = 'none';
        }
    }

    btn.onclick = function(){
        scroll({
            left: 0,
            top: 0,
            behavior: "smooth",

        })
    }

console.log(screen.width);
console.log(screen.height);

console.log(screen.availWidth);
console.log(screen.availHeight);

// http://www.linkedin.com/in/alaa-karem-602860223   ==> href
// http://  ==> Protocol
// www.linkedin.com  ==> Host Name
// /in/alaa-karem-602860223  ==> Path Name


console.log(location)
// history.back()
// location.reload()

// location.assign('http://www.linkedin.com/in/alaa-karem-602860223')   ==> Can back to previous page
// location.replace('http://www.linkedin.com/in/alaa-karem-602860223')  ==> Can't back to previous page


    // SetTimeOut & setInterval
// let hello =    setTimeout(function(){           // make function starts after some few seconds just once
//     console.log('hello');
// }, 3000);

// clearTimeout(hello);   // To end hello function

// let i=1;
// let hello2 =    setInterval(function(){           // make function starts after some few seconds and loop it
//     console.log(i++);
//     if(i==5) clearInterval(hello2);
// }, 1000);


    // localStorage & sessionStorage
//in localStorage, we can add items, read items and delete
    //add:
window.localStorage.setItem('name', 'alaa');
window.localStorage.x = 'ali';
    //read:
console.log(localStorage.getItem('name'));
console.log(localStorage.x);
// But it's understands any datatype except (string) So,
// You could write JSON.stringify(value);

localStorage.setItem('age', JSON.stringify(21));
console.log(localStorage.getItem('age'));

localStorage.user = JSON.stringify({
    name:'alaakarem',
    age: 21,
})
console.log(JSON.parse(localStorage.getItem('user')));
console.log(localStorage.key(2));

    //delete:
localStorage.removeItem('age');

localStorage.clear();     // delete all

*/

// CRUDS  ==> Create , Read , Update , Delete , Search