import Vector from "../src/Vector";

describe("Vector", () => {
    let vector: Vector

    beforeEach(() => {
        vector = new Vector(3, 4)
    })

    it("has correct properties", () => {
        expect(vector.x).toBe(3)
        expect(vector.y).toBe(4)
        expect(vector.angle).toBeCloseTo(0.927)
        expect(vector.magnitude).toBe(5)
    })

    it("updates properties on set x", () => {
        vector.x = 0
        expect(vector.x).toBe(0)
        expect(vector.y).toBe(4)
        expect(vector.angle).toBe(Math.PI/2)
        expect(vector.magnitude).toBe(4)
    })
    it("updates properties on set y", () => {
        vector.y = 0
        expect(vector.x).toBe(3)
        expect(vector.y).toBe(0)
        expect(vector.angle).toBe(0)
        expect(vector.magnitude).toBe(3)
    })
    it("updates properties on set angle", () => {
        vector.angle = 0
        expect(vector.x).toBe(vector.magnitude)
        expect(vector.y).toBe(0)
        expect(vector.angle).toBe(0)
        expect(vector.magnitude).toBe(5)
    })
    it("updates properties on set magnitude", () => {
        vector.magnitude = 0
        expect(vector.x).toBe(0)
        expect(vector.y).toBe(0)
        expect(vector.angle).toBeCloseTo(0.927)
        expect(vector.magnitude).toBe(0)
    })
})
