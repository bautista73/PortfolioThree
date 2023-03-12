// works hover and expand

const titles = document.querySelectorAll('.titles-list li');
const projectImages = document.querySelectorAll('.project-image');

titles.forEach((title, index) => {
  title.addEventListener('mouseover', () => {
    const image = title.getAttribute('data-image');
    projectImages[index].style.backgroundImage = `url(${image})`;
  });
  title.addEventListener('mouseout', () => {
    projectImages[index].style.backgroundImage = '';
  });
});




// let linkClicked = false;

// for (const link of nav.getElementsByTagName("a")) {
//   link.onmousemove = e => {
//     const rect = link.getBoundingClientRect(),
//       img = link.querySelector("img");

//     if (!linkClicked) {
//       img.style.opacity = 1; // only set opacity to 1 if link hasn't been clicked
//     }
//     img.style.left = `${e.clientX - rect.left}px`;
//     img.style.top = `${e.clientY - rect.top}px`;
//   };

//   link.onclick = e => {
//     e.preventDefault(); // prevent link behavior 
  
//     const details = link.querySelector(".project-details");
//     const img = link.querySelector("img");

//     if (details.style.maxHeight) {
//       details.style.maxHeight = null;
//       img.style.opacity = 1; // set image opacity back to 1
//       linkClicked = false; // reset flag
//     } else {
//       details.style.maxHeight = `${details.scrollHeight}px`;
//       img.style.opacity = 0;
//       linkClicked = true; // set flag
//     } 
//   };

//   link.onmouseleave = e => {
//     const img = link.querySelector("img");
//     if (!linkClicked) {
//       img.style.opacity = 0; // only set opacity to 0 if link hasn't been clicked
//     }
//   };
// }
