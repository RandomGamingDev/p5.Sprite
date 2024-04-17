let tilemap_atlas;

function preload() {
  tilemap_atlas = loadImage("tilemap.png");
}

let sprite;

function setup() {
  createCanvas(400, 400);
  noSmooth();
  
  sprite =
    new Sprite(
      tilemap_atlas, // The image containing the texture atlas
      // These are normalized coordinates within the atlas specifying each frame of the animation
      [ // <LEFT> <TOP> <WIDTH> <HEIGHT>
        [1 * 0.05, 12 * 0.05, 0.05, 0.05],
        [2 * 0.05, 12 * 0.05, 0.05, 0.05],
        [3 * 0.05, 12 * 0.05, 0.05, 0.05],
        [4 * 0.05, 12 * 0.05, 0.05, 0.05]
      ],
      [0, 0], // The position of the top left of the sprite
      [400, 400], // The width and height of the sprite
      2 // The speed in fps (frames per second)
    );
}

function draw() {
  background(0);
  
  // Sprites only support deltaTime
  sprite.tick(false);
}