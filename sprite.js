class Sprite extends Animation {
    constructor(atlas, sprites, pos, size, speed, disp = window, playing = true, progress = 0, step = 0) {
        super(disp, playing, progress, step, speed, true, false, disp.getTargetFrameRate());
        this.atlas = atlas;
        this.sprites = sprites;
        this.pos = pos;
        this.size = size;
    }

    animationFrame(stepProgress) {
        this.sprite = 
            this.sprites[
                stepProgress == 1 ?
                    this.sprites.length - 1 :
                    Math.floor((this.sprites.length - 1) * stepProgress)
            ];
        this.disp.image(this.atlas,
              this.pos[0], this.pos[1], this.size[0], this.size[1],
              this.sprite[0] * this.atlas.width, this.sprite[1] * this.atlas.height,
              this.sprite[2] * this.atlas.width, this.sprite[3] * this.atlas.height);
    }
}
