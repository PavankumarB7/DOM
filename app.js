// DOM Manipulation


// 1.Selecting Elements in DOM(Methods)

// getElementById() [you can select an element using this method by its unique id & this is the easiest way to find the html element inside the DOM tree]

/*const title = document.getElementById('main-heading');

console.log(title)*/


// getElementByClassName() [this method returns a collection of all the elements in the document with that specified class name]

// const listItems = document.getElementsByClassName('list-items')

// console.log(listItem)


// getElementByTagName() [similar to class name accepts a tag name & returns all of the elements of that that specified tag name in the order which they appear in a document so again return an array like object for all the child elements with the given tag name]

/*const listItems = document.getElementsByTagName('li');

console.log(listItems);*/


// querySelector() [used to select one item or the first item that matches the selector is given. So if u have multiple items with same class name or the same id or even the same tag it will select the 1st one it comes across]

// const container = document.querySelector('div');

// console.log(container);


// querySelectorAll()
/*const container = document.querySelectorAll('div');

console.log(container);*/


// 2.Styling an Element

/*const title = document.querySelector('#main-heading');

title.style.color = 'red';

console.log(title);

const listItems = document.querySelectorAll('.list-items');


for (i=0; i<listItems.length; i++) {
    listItems[i].style.fontSize = '3rem';
}

console.log(listItems)*/


// 3.Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// 4.Adding Elements

ul.append(li)


// 5.Modifying the text

/*const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);*/

li.innerText = 'X-Men';


// 6.Modifying Attributes & Classes

/*li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));*/

li.classList.add('list-items');
// li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));


// 7.Remove Elements

li.remove();


// 8.Traversing the DOM

// Parent Node Traversal (Navigate Upwards DOM)

/*let ull = document.querySelector('ul');

console.log(ull.parentNode);
console.log(ull.parentElement);

// Grand Parent
console.log(ull.parentNode.parentNode);
console.log(ull.parentElement.parentElement);

const html = document.documentElement;

console.log(html.parentNode); // parent node is more used
console.log(html.parentElement); // document node & element node aren't the same type of node that's why it shows null.*/


// Child Node Traversal (Navigate Downwards DOM)

/*let ull = document.querySelector('ul');

console.log(ull.childNodes);
console.log(ull.firstChild);
console.log(ull.lastChild);

ull.childNodes[1].style.backgroundColor = 'brown';

console.log(ull.children);
console.log(ull.firstElementChild);
console.log(ull.lastElementChild);*/

// Sibling Node Traversal

let ull = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ull.previousSibling);
console.log(ull.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
