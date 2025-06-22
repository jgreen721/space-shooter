class Planet {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.origY = y;
    this.size = size;
    this.radian = 0.01;
    this.toSpin = false;
  }

  draw() {
    ctx.beginPath();
    this.rotate();
    ctx.drawImage(
      this.img,
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }

  update(offset) {
    console.log(offset);
    if (this.toSpin) return;
    if (offset == 0) {
      this.toSpin = true;
    } else {
      this.y = offset + this.origY;
    }
  }

  rotate() {
    if (!this.toSpin) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.radian);
    ctx.translate(-this.x, -this.y);
    this.radian += 0.01;
  }
}
