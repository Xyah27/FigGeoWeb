import * as THREE from 'three';

// Configuración de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Crear un cubo
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -2;
scene.add(cube);

// Crear un cilindro
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);

// Crear un círculo
const circleGeometry = new THREE.CircleGeometry(0.5, 32);
const circleMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.position.x = 2;
scene.add(circle);

// Posición de la cámara
camera.position.z = 5;

// Función para generar un color aleatorio
function getRandomColor() {
    return Math.floor(Math.random() * 16777215); // Número aleatorio entre 0x000000 y 0xFFFFFF
}

// Evento para el botón de cambio de color
document.getElementById('colorButton').addEventListener('click', () => {
    cube.material.color.setHex(getRandomColor());
    cylinder.material.color.setHex(getRandomColor());
    circle.material.color.setHex(getRandomColor());
});

// Animación
function animate() {
    requestAnimationFrame(animate);

    // Rotación para que los objetos giren
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
