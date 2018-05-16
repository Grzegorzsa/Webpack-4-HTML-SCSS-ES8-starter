import style from '../scss/main.scss';

const name = 'John';
const greeting = `Hello ${name}!!!`;
const htmlElement = document.getElementById('message');
htmlElement.innerText = greeting;
