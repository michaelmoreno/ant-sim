import Vector from "./Vector"

abstract class Agent {
    position: Vector
    velocity: Vector
    acceleration: Vector
    mass: number
    maxSteer: number
    maxSpeed: number

    constructor(position: Vector, mass: number, maxSteer: number, maxSpeed: number) {
        this.position = position
        this.velocity = new Vector(0, 0)
        this.acceleration = new Vector(0, 0)
        this.mass = mass
        this.maxSteer = maxSteer 
        this.maxSpeed = maxSpeed
    }
    seek(target: Vector): void {
        let force = Vector
            .subtract(target, this.position)
            .limit(this.maxSpeed)
            .subtract(this.velocity)
            .limit(this.maxSteer)
        this.acceleration.add(force.divide(this.mass))
    }
    update(): void {
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.acceleration.multiply(0)
    }
}

export default Agent
