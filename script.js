const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

class Vector{
    constructor(mag=1, x=0, y=0){
        this.theta = Math.atan(y/x);
        this.x = x;
        this.y = y;
        if(x > 0 && y > 0){
            this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        } else {
            this.x = Math.cos(this.theta) * this.mag;
            this.y = Math.sin(this.theta) * this.mag;
        }
    }
}  
