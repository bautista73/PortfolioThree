// works hover and expand

const nav = document.getElementById("nav");

class Project {
  constructor(title, description, technologies) {
    this.title = title;
    this.description = description;
    this.technologies = technologies;
  }
}

for (const link of nav.getElementsByTagName("a")) {
  link.onmousemove = e => {
    const rect = link.getBoundingClientRect(),
      img = link.querySelector("img");

    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  };

  link.onclick = e => {
    e.preventDefault(); // prevent link behavior 
  
    const details = link.querySelector(".project-details");
    const img = link.querySelector("img");

    if (details.style.maxHeight) {
      details.style.maxHeight = null;
      img.style.opacity = 1;
    } else {
      details.style.maxHeight = `${details.scrollHeight}px`;
      img.style.opacity = 0;
    }
  };
  
}





// const nav = document.getElementById("nav");

// for(const link of nav.getElementsByTagName("a")) {  
//   link.onmousemove = e => {
//     const rect = link.getBoundingClientRect(),    
//           img = link.querySelector("img");
    
//     img.style.left = `${e.clientX - rect.left}px`;
//     img.style.top = `${e.clientY - rect.top}px`;
//   }
// }

// projects expand 
