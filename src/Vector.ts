class Vector {
    protected _x: number
    protected _y: number
    protected _angle: number
    protected _magnitude: number

    constructor(x: number, y: number) {
        this._x = x
        this._y = y
        this._angle = Math.atan2(y, x)
        this._magnitude = Math.sqrt(x * x + y * y)
    }
    get x() { return this._x }
    get y() { return this._y }
    get angle() { return this._angle }
    get magnitude() { return this._magnitude }
    set x(x: number) {
        this._x = x
        this._angle = Math.atan2(this._y, this._x)
        this._magnitude = Math.sqrt(this._x * this._x + this._y * this._y)
    }
    set y(y: number) {
        this._y = y
        this._angle = Math.atan2(this._y, this._x)
        this._magnitude = Math.sqrt(this._x * this._x + this._y * this._y)
    }
    set angle(radians: number) {
        this._angle = radians
        this._x = Math.cos(this._angle) * this._magnitude
        this._y = Math.sin(this._angle) * this._magnitude
    }
    set magnitude(magnitude: number) {
        this._magnitude = magnitude
        this._x = Math.cos(this._angle) * this._magnitude
        this._y = Math.sin(this._angle) * this._magnitude
    }
    add(vector: Vector | [number, number]): Vector {
        this.x += vector instanceof Vector ? vector.x : vector[0]
        this.y += vector instanceof Vector ? vector.y : vector[1]
        return this
    }
    subtract(vector: Vector | [number, number]): Vector {
        this.x -= vector instanceof Vector ? vector.x : vector[0]
        this.y -= vector instanceof Vector ? vector.y : vector[1]
        return this
    }
    multiply(scalar: number): Vector {
        this.x *= scalar
        this.y *= scalar
        return this
    }
    divide(scalar: number): Vector {
        this.x /= scalar
        this.y /= scalar
        return this
    }
    limit(max: number): Vector {
        if (this.magnitude > max)
            this.magnitude = max
        return this
    }
    normalize(): Vector {
        this.magnitude = 1
        return this
    }
    clone(): Vector {
        return new Vector(this.x, this.y)
    }
    static add(vector: Vector | [number,number], ...vectors: (Vector|[number,number])[]): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return vectors.reduce((v1: Vector, v2) => v1.add(v2), base)
    }
    static subtract(vector: Vector | [number,number], ...vectors: (Vector|[number,number])[]): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return vectors.reduce((v1: Vector, v2) => v1.subtract(v2), base)
    }
    static multiply(vector: Vector | [number,number], scalar: number): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return base.multiply(scalar)
    }
    static divide(vector: Vector | [number,number], scalar: number): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return base.divide(scalar)
    }
    static limit(vector: Vector | [number,number], max: number): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return base.limit(max)
    }
    static normalize(vector: Vector | [number,number]): Vector {
        let base = vector instanceof Vector ? vector.clone() : new Vector(vector[0], vector[1])
        return base.normalize()
    }
    static dot(vector: Vector | [number,number], ...vectors: (Vector|[number,number])[]): number {
        let dp = 0
        for (let v of vectors) {
            let v2 = v instanceof Vector ? v : new Vector(v[0], v[1])
            if (vector instanceof Vector)
                dp += vector.x * v2.x + vector.y * v2.y
            else
                dp += vector[0] * v2.x + vector[1] * v2.y
        }
        return dp
    }
}

export default Vector
