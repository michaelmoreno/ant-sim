import Agent from "./Agent";
import Vector from "./Vector";


class Ant extends Agent {

    constructor(position: Vector, mass: number, maxSteer: number, maxSpeed: number) {
        super(position, mass, maxSteer, maxSpeed)
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2)
        ctx.fillStyle = 'black'
        ctx.fill()
        ctx.closePath()
    }
}

export default Ant