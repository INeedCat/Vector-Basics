const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

class Vector{
    constructor(x=0, y=0){
        this.theta = Math.atan(y/x);
        this.x = x;
        this.y = y;
        this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize(){
        let nx = Math.cos(this.theta);
        let ny = Math.sin(this.theta);
        return new Vector(nx, ny);
    }

    add(vec){
        let ax = this.x + vec.x;
        let ay = this.y + vec.y;
        return new Vector(ax, ay);
    }

    sub(vec){
        let sx = this.x - vec.x;
        let sy = this.y - vec.y;
        return new Vector(sx, sy);
    }
}  
