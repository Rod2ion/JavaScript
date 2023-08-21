function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width * this.height
    };
    Rectangle.prototype.area = function (){
        return this.width * this.height;
    };
    Rectangle.prototype.primeter = function (){
        return 2 * (this.width + this.height);
    };

    Rectangle.prototype.isSquare = function (){
        return this.width === this.height;
    };
}

const rect = new Rectangle('Rect' ,20, 30);
console.log(rect);
console.log(rect.area());