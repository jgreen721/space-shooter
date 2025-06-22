class Bg {
  constructor(img, img2) {
    this.img = img;
    this.img2 = img2;
    this.x = 0;
    this.y = 0;
    this.offset = -canvas.height * 3;
    // this.offset = 0;
  }

  draw() {
    this.update();
    ctx.drawImage(
      this.img,
      this.x,
      this.y + this.offset,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      this.img2,
      this.x,
      this.y + this.offset + canvas.height,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      this.img,
      this.x,
      this.y + this.offset + canvas.height * 2,
      canvas.width,
      canvas.height
    );
    ctx.drawImage(
      this.img2,
      this.x,
      this.y + this.offset + canvas.height * 3,
      canvas.width,
      canvas.height
    );
    // ctx.drawImage(this.img, this.x, this.y, canvas.width, canvas.height);
    // ctx.drawImage(this.img2, this.x, this.y + , canvas.width, canvas.height);
  }

  update() {
    if (this.offset < 0) {
      this.offset += 10;
    }
    if (this.offset > 0) {
      this.offset = 0;
    }
  }
}
