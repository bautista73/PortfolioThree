// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = document.querySelectorAll('.project');

// projects.forEach((project) => {
//   const img = project.querySelector('img');
//   const info = project.querySelector('.project-info');

//   gsap.set(project, { scale: 1, transformOrigin: 'center' });
//   gsap.set(img, { scale: 1, transformOrigin: 'center' });
//   gsap.set(info, { color: 'gray' });

//   ScrollTrigger.create({
//     trigger: project,
//     start: 'top 40%',
//     end: 'bottom 50%',
//     // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
//     onEnter: () => {
//         gsap.to(project, { scale: 1.05 });
//         gsap.to(img, { scale: 1.05 });
//         gsap.to(info, { color: 'white' });
//     },
//     onLeave: () => {
//         gsap.to(project, { scale: 1 });
//         gsap.to(img, { scale: 1 });
//         gsap.to(info, { color: 'gray' });
//     },
//     onEnterBack: () => {
//         gsap.to(project, { scale: 1.05 });
//         gsap.to(img, { scale: 1.05 });
//         gsap.to(info, { color: 'white' });
//     },
//     onLeaveBack: () => {
//         gsap.to(project, { scale: 1 });
//         gsap.to(img, { scale: 1 });
//         gsap.to(info, { color: 'gray' });
//     }
//   });
// });







