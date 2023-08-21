const rectanglePrototypes = {
    area: function (){
        return this.witdh * this.height
    },
    perimeter: function(){
        return 2 * (this.witdh + this.height)
    },
    isSquere: function(){
        return this.height === this.witdh
    }
}

function createRectangle(height,witdh){
    return Object.create(rectanglePrototypes, {
        height: {
            value: height,
        },
        witdh: {
            value: witdh,
        },
    });
}

const rect = createRectangle(10,20);
console.log(rect);