import Agent from "../src/Agent";
import Vector from "../src/Vector";

class MockAgent extends Agent {
    constructor(position: Vector, mass: number, maxSteer: number, maxSpeed: number) {
        super(position, mass, maxSteer, maxSpeed)
    }
}

describe("behaviors", () => {
    let agent: MockAgent

    beforeEach(() => {
        agent = new MockAgent(new Vector(0, 0), 5, 1, 1)
    })

    it("seeks target", () => {
        agent.seek(new Vector(5, 5))
        expect(agent.acceleration.x).toBeCloseTo(0.1414)
        expect(agent.acceleration.y).toBeCloseTo(0.1414)
    })
})
