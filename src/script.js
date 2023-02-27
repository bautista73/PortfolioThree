import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.setZ(30);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: true});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function update() {
    // Twist the sphere corkscrew
    const time = Date.now() * 0.0005;
    sphere.rotation.x = time * 0.5;
    sphere.rotation.y = time * 0.2;
  
    // Set vertex colors based on position
    const positions = sphere.geometry.attributes.position.array;
    const colors = [];
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
  
      const color = new THREE.Color();
      color.setHSL((y + 5) / 10, 1.0, (z + 5) / 10);
      colors.push(color.r, color.g, color.b);
    }
    sphere.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
}
  
  function render() {
    requestAnimationFrame(render);
    update();
    renderer.render(scene, camera);
  }
  
  render();
  
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var geometry = new THREE.SphereGeometry(10, 64, 64);
// var material = new THREE.ShaderMaterial({
//     uniforms: {
//         time: { value: 0.0 }
//     },
//     vertexShader: document.getElementById('vertexShader').textContent,
//     fragmentShader: document.getElementById('fragmentShader').textContent
// });
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// camera.position.z = 30;

// var animate = function (time) {
//     requestAnimationFrame(animate);
//     sphere.rotation.x += 0.01;
//     sphere.rotation.y += 0.01;
//     material.uniforms.time.value = time / 1000;
//     renderer.render(scene, camera);
// };

// animate(0);