// Open for Extension, Closed for Modification

// classes should be open for extension but closed for modification. In doing so, we stop ourselves 
// from modifying existing code and causing potential new bugs in an otherwise happy application.



// We create a class that receives rectangles, but what if I want to add the functionality 
// that calculates area of triangles?
class RectagleExmaple {
    width: number;
    height: number;
    constructor(item?: RectagleExmaple) {
        this.width = item?.width ?? 0;
        this.height = item?.height ?? 0;
    }
}

class AreaCalculatorExample{
    computeArea(shapes: RectagleExmaple[]) {
        let area = 0;
        for (let shape of shapes) {
            area += (shape.width * shape.height)

            // condition for triangle but is a mistake
            // If is triangle then area/2
        }
        return area;
    }
}

// The solution is implement a interface with a function

interface IShape {
    getArea(): number;
}

class BaseFigure {
    public width: number;
    public height: number;
    constructor(item?: BaseFigure) {
        this.width = item?.width ?? 0;
        this.height = item?.height ?? 0;
    }
}


class Rectangle extends BaseFigure implements IShape{
    constructor(item: BaseFigure) {
        super(item);
    }
    
    getArea(): number {
        return this.width * this.height
    }
}

class Triangle extends BaseFigure implements IShape{
    constructor(item: BaseFigure) {
        super(item);
    }

    getArea(): number {
        return (this.width * this.height)/2
    }
}


class AreaCalculator {
    computeArea(shapes: IShape[]) {
        let area = 0;
        for (let shape of shapes) {
            area += shape.getArea()
        }
        return area;
    }
}

const triangle1 = new Triangle({width: 2, height: 3}) 
const triangle2 = new Triangle({width: 3, height: 5})
const rectangle1 = new Rectangle({width: 4, height: 4})
const rectangle2 = new Rectangle({width: 6, height: 7})

// console.log([triangle1])
// Test
console.log(new AreaCalculator().computeArea([triangle1, triangle2, rectangle1, rectangle2]))