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
}

export default Vector
