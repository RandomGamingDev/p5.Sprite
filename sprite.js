class Sprite extends Animation {
    constructor(atlas, sprites, pos, size, speed, disp = _renderer, playing = true, progress = 0, step = 0) {
        super(disp, playing, progress, step, speed, true, false, 0);
        this.atlas = atlas;
        this.sprites = sprites;
        this.pos = pos;
        this.size = size;
    }

    animationFrame(stepProgress) {
        this.sprite = this.sprites[Math.floor((this.sprites.length - 1) * stepProgress)];
        image(this.atlas,
              this.pos[0], this.pos[1], this.size[0], this.size[1],
              this.sprite[0] * this.atlas.width, this.sprite[1] * this.atlas.height,
              this.sprite[2] * this.atlas.width, this.sprite[3] * this.atlas.height);
    }
}
