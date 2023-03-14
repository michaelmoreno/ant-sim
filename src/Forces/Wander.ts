import Agent from "../Agent";
import Vector from "../Vector";

class Wander {
    agent: Agent
    distance: number;
    radius: number;
    angle: number;

    constructor(agent: Agent, distance: number, radius: number, angle: number) {
        this.agent = agent
        this.distance = distance;
        this.radius = radius;
        this.angle = angle;
    }
    getForce(): Vector {
        let circleCenter = this.agent.velocity.clone()
            .normalize()
            .multiply(this.distance)
            .add(this.agent.position)

        let displacement = new Vector(this.radius, 0)
            .rotate(this.angle)
            .add(circleCenter)

        this.angle += Math.random() * 0.4 - 0.2

        return Vector.subtract(displacement, agent.position)
    }
}