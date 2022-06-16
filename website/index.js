// Make HTML element canvas appear
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// size of canvas
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

// background png
const image = new Image();
image.src = "./img/Pellet Town.png";

// 4 side by side playerDown Image
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image
  }

  draw() {
    // Make background and player appear centered on screen
    c.drawImage(this.image, this.position.x, this.position.y
   );
  }
}

const background = new Sprite({
  position: {
    x: -742,
    y: -600,
  },
    image: image
});

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
  window.requestAnimationFrame(animate);
    background.draw()

  c.drawImage(
    // cropping
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    // actual width and height of image rendered on screen
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  )
    
    if (keys.w.pressed && lastKey === 'w') background.position.y += 3,
 elseif (keys.a.pressed && lastKey === 'a'); background.position.x += 3,
 elseif (keys.s.pressed && lastKey   === 's'); background.position.y -= 3,
 elseif (keys.d.pressed && lastKey === 'd');  background.position.x -= 3
};
animate();

let lastKey = ''

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
          lastKey = 'w'
      break;
    case "a":
      keys.a.pressed = true;
          lastKey = 'a'
      break;
    case "s":
      keys.s.pressed = true;
          lastKey = 's'
      break;
    case "d":
      keys.d.pressed = true;
          lastKey = 'd'
      break;
  }
    console.log(keys)
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
    console.log(keys)
});
