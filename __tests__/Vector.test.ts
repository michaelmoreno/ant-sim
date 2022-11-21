import Vector from "../src/Vector";

describe("properties", () => {
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

describe("arithmetic operations", () => {
    let vector: Vector
    
    beforeEach(() => {
        vector = new Vector(3, 4)
    })

    it("adds tuple", () => {
        vector.add([1, 2])
        expect(vector.x).toBe(4)
        expect(vector.y).toBe(6)
    })
    it("adds vector", () => {
        vector.add(new Vector(1,2))
        expect(vector.x).toBe(4)
        expect(vector.y).toBe(6)
    })
    it("subtracts tuple", () => {
        vector.subtract([1, 2])
        expect(vector.x).toBe(2)
        expect(vector.y).toBe(2)
    })
    it("subtracts vector", () => {
        vector.subtract(new Vector(1,2))
        expect(vector.x).toBe(2)
        expect(vector.y).toBe(2)
    })
    it("multiplies", () => {
        vector.multiply(2)
        expect(vector.x).toBe(6)
        expect(vector.y).toBe(8)
    })
    it("divides", () => {
        vector.divide(2)
        expect(vector.x).toBe(1.5)
        expect(vector.y).toBe(2)
    })
    it("chains operations", () => {
        vector.add([1, 2]).subtract([2, 1]).multiply(2).divide(2)
        expect(vector.x).toBe(2)
        expect(vector.y).toBe(5)
    })
})

describe("general methods", () => {
    let vector: Vector
    
    beforeEach(() => {
        vector = new Vector(3, 4)
    })

    it('limits magnitude', () => {
        vector.limit(3)
        expect(vector.magnitude).toBe(3)
        expect(vector.x).toBeCloseTo(1.8)
        expect(vector.y).toBeCloseTo(2.4)
    })
    it("normalizes", () => {
        vector.normalize()
        expect(vector.magnitude).toBe(1)
    })
    it("clones", () => {
        const clone = vector.clone()
        expect(clone.x).toBe(vector.x)
        expect(clone.y).toBe(vector.y)
    })
})

describe("static methods", () => {
    it("adds", () => {
        const vector = Vector.add([1, 2], new Vector(3, 4), [5, 6])
        expect(vector.x).toBe(9)
        expect(vector.y).toBe(12)
    })
    it("subtracts", () => {
        const vector = Vector.subtract(new Vector(3, 4), [1, 2], [-1, -2])
        expect(vector.x).toBe(3)
        expect(vector.y).toBe(4)
    })
    it("multiplies", () => {
        const vector = Vector.multiply([1, 2], 2)
        expect(vector.x).toBe(2)
        expect(vector.y).toBe(4)
    })
    it("divides", () => {
        const vector = Vector.divide([1, 2], 2)
        expect(vector.x).toBe(0.5)
        expect(vector.y).toBe(1)
    })
    it("limits magnitude", () => {
        const vector = Vector.limit([3, 4], 3)
        expect(vector.magnitude).toBe(3)
        expect(vector.x).toBeCloseTo(1.8)
        expect(vector.y).toBeCloseTo(2.4)
    })
    it("normalizes", () => {
        const vector = Vector.normalize([3, 4])
        expect(vector.magnitude).toBe(1)
    })
    it("dot product", () => {
        const dot = Vector.dot([2, 2], [3, 4])
        expect(dot).toBe(14)
    })
})
