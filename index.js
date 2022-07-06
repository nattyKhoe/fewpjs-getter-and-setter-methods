// Add your Circle class here
class Circle {
    constructor (radius){
        this.radius = radius;
    }
    
    get diameter () {
        return 2*this.radius;
    }

    get circumference () {
        return 2*this.radius*Math.PI;
    }
    

    get area () {
        return this.radius**2*Math.PI;
    }

    set diameter (diameter){
        this.radius = diameter/2;
        return this.radius;
    }

    set circumference (circumference){
        this.radius = circumference/(2*Math.PI);
        return this.radius;
    }

    set area (area) {
        this.radius = Math.sqrt(area/Math.PI);
        return this.radius;
    }

}