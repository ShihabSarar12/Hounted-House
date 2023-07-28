//TODO npm install --save three
//TODO npm install --save-dev vite
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const fog = new THREE.Fog("#262837", 1, 40);
const scene = new THREE.Scene();
scene.fog = fog;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();
const wallColorTexture = textureLoader.load("./textures/bricks/color.jpg");
const wallNormalTexture = textureLoader.load("./textures/bricks/normal.jpg");
const wallRoughnessTexture = textureLoader.load(
  "./textures/bricks/roughness.jpg"
);
const wallAoTexture = textureLoader.load(
  "./textures/bricks/ambientOcclusion.jpg"
);
const doorColorTexture = textureLoader.load("./textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const doorAoTexture = textureLoader.load(
  "./textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("./textures/door/height.jpg");
const doorMetalnessTexture = textureLoader.load(
  "./textures/door/metalness.jpg"
);
const doorRoughnessTexture = textureLoader.load(
  "./textures/door/roughness.jpg"
);
const doorNormalTexture = textureLoader.load("./textures/door/normal.jpg");
const grassColorTexture = textureLoader.load("./textures/grass/color.jpg");
const grassNormalTexture = textureLoader.load("./textures/grass/normal.jpg");
const grassRoughnessTexture = textureLoader.load(
  "./textures/grass/roughness.jpg"
);
const grassAoTexture = textureLoader.load(
  "./textures/grass/ambientOcclusion.jpg"
);
grassColorTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);
grassAoTexture.repeat.set(8, 8);
grassColorTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;
grassAoTexture.wrapT = THREE.RepeatWrapping;
grassColorTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;
grassAoTexture.wrapT = THREE.RepeatWrapping;

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 17;
camera.position.y = 7;

const grass = new THREE.Mesh(
  new THREE.PlaneGeometry(50, 50, 64, 64),
  new THREE.MeshStandardMaterial({
    color: "#0d5c1e",
    side: THREE.DoubleSide,
    map: grassColorTexture,
    normalMap: grassNormalTexture,
    aoMap: grassAoTexture,
    roughnessMap: grassRoughnessTexture,
  })
);
grass.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(grass.geometry.attributes.uv.array, 2)
);
grass.receiveShadow = true;
grass.rotation.x = -Math.PI * 0.5;
scene.add(grass);

const house = new THREE.Group();
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(8, 6, 8),
  new THREE.MeshStandardMaterial({
    color: "#965a38",
    map: wallColorTexture,
    normalMap: wallNormalTexture,
    roughnessMap: wallRoughnessTexture,
    aoMap: wallAoTexture,
  })
);
walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.position.y = 3 + 0.01;
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(7, 3, 4),
  new THREE.MeshStandardMaterial({ color: "#e66739" })
);
roof.position.y = 7 + 0.01;
roof.rotation.y = Math.PI * 0.25;
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 5),
  new THREE.MeshStandardMaterial({
    color: "#f2a50a",
    map: doorColorTexture,
    aoMap: doorAoTexture,
    transparent: true,
    normalMap: doorNormalTexture,
    roughnessMap: doorRoughnessTexture,
    metalnessMap: doorMetalnessTexture,
    displacementMap: doorHeightTexture,
    alphaMap: doorAlphaTexture,
    displacementScale: 0.8,
  })
);
door.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);
door.position.y = 2.5;
door.position.z = 4.01;
house.add(walls, roof, door);
house.castShadow = true;
scene.add(house);

const bushes = new THREE.Group();
const bush1 = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshStandardMaterial({
    color: "#23913b",
    map: grassColorTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
    aoMap: grassAoTexture,
  })
);
bush1.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush1.geometry.attributes.uv.array, 2)
);
bush1.position.x = 2;
bush1.position.y = 0.5 + 0.01;
bush1.position.z = 0.5 + 4 + 0.01;
const bush2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshStandardMaterial({
    color: "#23913b",
    map: grassColorTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
    aoMap: grassAoTexture,
  })
);
bush2.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush2.geometry.attributes.uv.array, 2)
);
bush2.position.x = -2;
bush2.position.y = 0.25 + 0.01;
bush2.position.z = 0.25 + 4 + 0.01;
const bush3 = new THREE.Mesh(
  new THREE.SphereGeometry(1.3),
  new THREE.MeshStandardMaterial({
    color: "#23913b",
    map: grassColorTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
    aoMap: grassAoTexture,
  })
);
bush3.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush3.geometry.attributes.uv.array, 2)
);
bush3.position.x = 3;
bush3.position.y = 0.65 + 0.01;
bush3.position.z = 0.65 + 4 + 0.01;
const bush4 = new THREE.Mesh(
  new THREE.SphereGeometry(1.2),
  new THREE.MeshStandardMaterial({
    color: "#23913b",
    map: grassColorTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
    aoMap: grassAoTexture,
  })
);
bush4.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush4.geometry.attributes.uv.array, 2)
);
bush4.position.x = -3.5;
bush4.position.y = 0.6 + 0.01;
bush4.position.z = 0.6 + 4 + 0.01;
bushes.add(bush1, bush2, bush3, bush4);
bushes.castShadow = true;
scene.add(bushes);

const graveGeometry = new THREE.BoxGeometry(2, 2, 0.5);
const graveMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
const graves = new THREE.Group();
for (let i = 0; i < 50; i++) {
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.castShadow = true;
  const angle = Math.PI * Math.random() * 2;
  const radius = Math.random() * 13 + 9;
  grave.position.y = 1 + 0.01;
  grave.position.x = Math.sin(angle) * radius;
  grave.position.z = Math.cos(angle) * radius;
  graves.add(grave);
}
scene.add(graves);

const dirLight = new THREE.DirectionalLight("#1a2f78", 0.7);
dirLight.position.set(0, 5, 5);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
const ambientLight = new THREE.AmbientLight("#2847b0", 0.7);
const pointLight = new THREE.PointLight("#f2a50a", 0.6, 20);
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
pointLight.castShadow = true;
pointLight.position.set(0, 4, 6);
scene.add(dirLight, ambientLight, pointLight);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const canvas = document.querySelector(".webgl");

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setClearColor("#262837");
renderer.shadowMap.enabled = true;
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();
const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
//! npx vite
