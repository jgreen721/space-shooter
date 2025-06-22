class Bullet {
  constructor(img, x, y, vel) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.srcX = 8;
    this.srcY = 2;
    this.width = img.width / 14;
    this.height = img.height / 4;
    this.size = 0;
    this.realSize = 50;
  }

  draw() {
    this.update();
    ctx.drawImage(
      this.img,
      this.width * this.srcX,
      this.height * this.srcY,
      this.width,
      this.height,
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
  }

  update() {
    if (this.size < this.realSize) this.size += 2.5;
    this.x += this.vel.x;
    this.y += this.vel.y;
  }
}
