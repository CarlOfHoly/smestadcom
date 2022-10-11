var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")
var maxRadius = 50
var distance = 100
var blobs = 2000

var mouse = {
  var: x,
  var: y,
}

var colors = ["#0A384A", "#024253", "#609691", "#C2D2C4", "#F4F3E1"]

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x
  mouse.y = event.y
})

window.addEventListener("resize", function (event) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.minRadius = radius
  this.color = colors[Math.floor(Math.random() * colors.length)]

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
  this.update = function () {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.y += this.dy
    this.x += this.dx

    //Interactivity with mouse

    if (
      mouse.x - this.x < distance &&
      mouse.x - this.x > -distance &&
      mouse.y - this.y < distance &&
      mouse.y - this.y > -distance
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }

    this.draw()
  }
}

var circleArray = []

for (var i = 0; i < blobs; i++) {
  var radius = Math.random() * 8 + 1
  var x = Math.random() * (window.innerWidth - radius * 2) + radius
  var y = Math.random() * (window.innerHeight - radius * 2) + radius
  var dx = Math.random() - 0.5
  var dy = Math.random() - 0.5

  circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()

document.addEventListener("click", function () {
  window.location.replace("subjects.html")
})

document.addEventListener("touchstart", function () {
  window.location.replace("subjects.html")
})
