// shape.js
class Shape {
    constructor(name = '') {
        this.name = name;
    }
    
    getArea() {
        throw new Error('Method not implemented');
    }
    
    getName() {
        return this.name;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(name, length, width) {
        super(name);
        this.length = length;
        this.width = width;
    }
    
    getArea() {
        return this.length * this.width;
    }
}

// 测试
const circle = new Circle('Circle', 5);
console.log(`Name: ${circle.getName()}, Area: ${circle.getArea().toFixed(2)}`); 

const rectangle = new Rectangle('Rectangle', 4, 5);
console.log(`Name: ${rectangle.getName()}, Area: ${rectangle.getArea()}`);