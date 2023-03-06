import { gsap } from "gsap";

let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('div');
  textContainer.classList.add('block');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0': letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }
  
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

// home page text fader


var selectedWorks = document.getElementById("selected-works");

gsap.set(selectedWorks, {opacity: 1});

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    gsap.to(selectedWorks, {opacity: 0, duration: 0.5});
  } else {
    gsap.to(selectedWorks, {opacity: 1, duration: 0.5});
  }
});

var socialWrap = document.getElementById("social-wrap");

gsap.set(socialWrap, {opacity: 1});

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    gsap.to(socialWrap, {opacity: 0, duration: 0.5});
  } else {
    gsap.to(socialWrap, {opacity: 1, duration: 0.5});
  }
});


// scroll animation

const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 50;
const diameter = radius * 2;

const circle = document.querySelector("#circle");
circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.dataset.text;
const characters = text.split("");

const deltaAngle = 360 / characters.length;
const characterOffsetAngle = 2;
let currentAngle = -90;

characters.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;
  const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
  const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

  const transform = `translate(${xPos}px, ${yPos}px)`;
  const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
  span.style.transform = `${transform} ${rotate}`;

  currentAngle += deltaAngle;
  circle.appendChild(span);
});
