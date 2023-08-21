class Rectangle {
    constructor(name,width,height){
        this.name = name;
        this.width = width;
        this.height = height;
    }
    area(){
        return this.height * this.width;
    }
  static getClass(){
        return 'Ractangle'
    }
}

const rect = new Rectangle('rect',10,10)
console.log(rect.area());
console.log(Rectangle.getClass());