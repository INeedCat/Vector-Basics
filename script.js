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
        return new Vector(Math.cos(this.theta, Math.sin(this.theta);
    }

    add(vec){
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    sub(vec){
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    dotProduct(vec){
        return (vec.x*this.x) + (vec.y *this.y) * Math.cos(Math.abs(this.theta-vec.theta))
    }
}  
