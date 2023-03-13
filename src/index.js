// works hover

const titles = document.querySelectorAll('.titles-list li');
const projectImages = document.querySelectorAll('.project-image');

titles.forEach((title, index) => {
  title.addEventListener('mouseover', () => {
    const image = title.getAttribute('data-image');
    projectImages[index].style.backgroundImage = `url(${image})`;
    projectImages[index].classList.add('visible');
  });
  title.addEventListener('mouseout', () => {
    projectImages[index].style.backgroundImage = '';
    projectImages[index].classList.remove('visible');
  });
});

// works modal 

const popupWindow = document.querySelector('#popup-window');
const popupContent = document.querySelector('#popup-content');
const closeButton = document.querySelector('#close-button');
const popupTriggers = document.querySelectorAll('.popup-trigger');

function displayPopup(content) {
  popupContent.innerHTML = content.innerHTML;
  popupWindow.style.display = 'block';
  popupWindow.classList.add('fade-in-bottom');
}

popupTriggers.forEach(popupTrigger => {
  const popupContentId = popupTrigger.getAttribute('data-popup-content');
  const popupContent = document.querySelector(popupContentId);
  
  popupTrigger.addEventListener('click', () => {
      displayPopup(popupContent);
  });
});

function closePopup() {
  popupWindow.classList.add('fade-out-top');
    setTimeout(() => {
        popupWindow.style.display = 'none';
        popupWindow.classList.remove('fade-out-top');
    }, 500);
}

closeButton.addEventListener('click', closePopup);

