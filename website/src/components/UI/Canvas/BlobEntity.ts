class BlobEntity {
  c: any
  x: number
  dx: number
  y: number
  dy: number
  radius: number
  colour: any

  constructor(
    x: number,
    dx: number,
    y: number,
    dy: number,
    radius: number,
    colour: any
  ) {
    this.x = x
    this.dx = dx
    this.y = y
    this.dy = dy
    this.radius = radius
    this.colour = colour
  }

  draw(c) {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.colour
    c.fill()
  }

  update(c) {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    this.draw(c)
  }
}

export default BlobEntity
