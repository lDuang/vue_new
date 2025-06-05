abstract class Shape {
    protected name: string;
   
    constructor();
    constructor(name: string);
    constructor(name?: string) {
        this.name = name || '';
    }

    abstract getArea(): number;
    getName(): string {
        return this.name;
    }
}

class Circle extends Shape {
    private r: number;
    constructor(name: string, r: number) {
        super(name);
        this.r = r;
    }
    getArea(): number {
        return Math.PI * this.r ** 2;
    }
}

class Rectangle extends Shape {
    private length: number;
    private width: number;
    constructor(name: string, length: number, width: number) {
        super(name);
        this.length = length;
        this.width = width;
    }
    getArea(): number {
        return this.length * this.width;
    }
}


const circle = new Circle('Circle', 5);
console.log(`Name: ${circle.getName()}, Area: ${circle.getArea().toFixed(2)}`);

const rectangle = new Rectangle('Rectangle', 4, 5);
console.log(`Name: ${rectangle.getName()}, Area: ${rectangle.getArea()}`);