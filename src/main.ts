import Vector from './Vector';
import Simulation from './Simulation';
import Ant from './Ant';

// const sim = new Simulation(, './assets/sprites');
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

const ant = new Ant(new Vector(100, 100), 1, .1, 1000)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ant.draw(ctx)
    ant.seek(new Vector(200, 200))
    ant.update()

    requestAnimationFrame(animate)
}

animate()