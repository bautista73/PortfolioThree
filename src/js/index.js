import { settings} from '../js/script.js';
import { gsap } from 'gsap';

window.addEventListener('click', function(event) {

  if (event.target.tagName === 'A') {

    event.preventDefault();

    var href = event.target.getAttribute('href');

    transitionToPage(href);
  }
});

function transitionToPage(href) {
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', href);
  xhr.onload = function() {

    var newPageContent = xhr.responseText;
    history.pushState(null, null, href);
    var container = document.getElementById('container');
    container.style.opacity = 0;

    setTimeout(function() {
      container.innerHTML = newPageContent;
      container.style.opacity = 1;

      container.classList.add("fade-out");

      let newSettings;
      if (window.location.href.includes('works.html')) {
        newSettings = {
          speed: 0.5,
          density: 2.0,
          strength: 0.5,
          frequency: 7.0,
          amplitude: 8.0,
          intensity: 10.0,
        };
      } else {
        newSettings = {
          speed: 0.03,
          density: 1.5,
          strength: 0.2,
          frequency: 3.0,
          amplitude: 6.0,
          intensity: 7.0,
        };
      }
      gsap.to(settings, {
        duration: 1,
        ease: "power2.inOut", 
        ...newSettings,
      }).then(() => {

      });
      initWebGL();
    }, 300);
  };
  xhr.send();
}


      // // Check which page is being loaded
      // if (window.location.href.includes('works.html')) {
      //   // Change the settings for the works page
      //   settings.speed = 0.05;
      //   settings.density = 1.6;
      //   settings.strength = 0.3;
      //   settings.frequency = 4.0;
      //   settings.amplitude = 7.0;
      //   settings.intensity = 8.0;
      // } else {
      //   // Set default settings for other pages
      //   settings.speed = 0.03;
      //   settings.density = 1.5;
      //   settings.strength = 0.2;
      //   settings.frequency = 3.0;
      //   settings.amplitude = 6.0;
      //   settings.intensity = 7.0;
      // }      
      
      // Re-initialize the WebGL canvas if necessary
      // (e.g. if the new page requires different WebGL settings)


