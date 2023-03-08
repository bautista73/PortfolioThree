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

const scrollLinks = document.querySelectorAll('.scroll-link');
  
scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

const nav = document.getElementById("nav");

for(const link of nav.getElementsByTagName("a")) {  
  link.onmousemove = e => {
    const rect = link.getBoundingClientRect(),    
          img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  }
}

// window.onmousemove = e => {
//   const percent = e.clientY / window.innerHeight;
  
//   nav.animate({
//     transform: `translateY(${percent * nav.offsetHeight * -0.07}px)`
//   }, {
//     fill: "forwards",
//     duration: 1000
//   })
// }