//How to Create Object using constructor

function Car(CarName, CarModel, CarEngine){
    this.CarName = CarName;
    this.CarModel = CarModel;
    this.CarEngine = CarEngine;
    
}


let Honda = new Car('Civic11', '2022', 'R18');
let Toyota = new Car('Corolla 11', '2022', '1nzFe');

Car.prototype.CarInformation = function() {
    return (`I am ${this.CarName} and I have ${this.CarEngine} Engine`);
}

// console.log(Car.hasOwnProperty('CarInformation()'));
var proto = Object.getPrototypeOf(Toyota);
console.log(proto)


function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.sayHi = function(){
    alert("Hi");
};

var studObj = new Student();
studObj.toString();
console.log(studObj);