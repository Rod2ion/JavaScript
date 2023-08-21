// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function(){
//         return this.width * this.height
//     };
//     Rectangle.prototype.area = function (){
//         return this.width * this.height;
//     };
//     Rectangle.prototype.primeter = function (){
//         return 2 * (this.width + this.height);
//     };

//     Rectangle.prototype.isSquare = function (){
//         return this.width === this.height;
//     };
//     Rectangle.prototype.logArea = function (){
//         console.log('Rectangle Area: ' + this.area());
//     };
// }




// Classes

// class Rectangle {
//     constructor(name, width, height){
//         this.name = name;
//         this.width = width;
//         this.height = height;
//     }

//     area(){
//         return this.height * this.width
//     }

//     perimeter(){
//         return 2 * (this.width + this.height)
//     }

//     isSquare(){
//         return this.width === this.height;
//     }
    
// }

// const square = new Rectangle('Square' ,20, 30);
// console.log(square);
// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());
// console.log(Object.getPrototypeOf(square));


// Class Ingeritance

class Shape {
    constructor(name){
        this.name = name;
    }

    logName() {
        console.log('Shape name: ' + this.name);
    }
}


// sub class

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);

        this.width = width;
        this.height = height;

    }
}

const rect = new Rectangle ('rect 1',20,30)
console.log(rect);
rect.logName();
