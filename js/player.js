class Player {
  constructor(img, x, y, playerSize) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = playerSize;
  }

  draw() {
    ctx.beginPath();
    this.rotate();
    ctx.drawImage(
      this.img,
      this.x - this.size / 2 - 55,
      this.y - this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }

  rotate() {
    ctx.save();
    ctx.translate(this.x, this.y);
    let shipRotation = 3.14; //offsets for mouse accuracy;
    if (mouse) {
      angle = mouse.subtract(new Vector(this.x, this.y)).angle();
      shipRotation += angle;
    } else {
      shipRotation = shipRotation / 2; //face top of screen
    }

    ctx.rotate(shipRotation);
    ctx.translate(-this.x, -this.y);
  }
}
