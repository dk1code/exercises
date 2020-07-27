"use strict";

// 1.

console.log("1:");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${this.name}, ${this.age} years old`;
        };
    }
}

const personObj = new Person("John", 19);

console.log(personObj.describe());

// 2.

console.log("\n2:");

class Cylinder {
    constructor(radius, height) {
        this.r = radius;
        this.h = height;
        this.calc = function () {
            let output = +(Math.PI * this.r ** 2 * this.h).toFixed(4);;
            return `The cylinder with radius ${this.r}cm and height ${this.h}cm has the volume of ${output}cm³.`
        }

    }
}

const exCyl = new Cylinder(2, 3);

console.log(exCyl.calc());

// 3. ***BONUS***

console.log("\n3: ***BONUS***");

//   function Clock({
//       template
//   }) {

//       let timer;

//       function render() {
//           let date = new Date();

//           let hours = date.getHours();
//           if (hours < 10) hours = '0' + hours;

//           let mins = date.getMinutes();
//           if (mins < 10) mins = '0' + mins;

//           let secs = date.getSeconds();
//           if (secs < 10) secs = '0' + secs;

//           let output = template
//               .replace('h', hours)
//               .replace('m', mins)
//               .replace('s', secs);

//           console.log(output);
//       }

//       this.stop = function () {
//           clearInterval(timer);
//       };

//       this.start = function () {
//           render();
//           timer = setInterval(render, 1000);
//       };

//   }

//   let clock = new Clock({
//       template: 'h:m:s'
//   });
// console.log(clock.start());


class Clock {
    constructor() {
        this.template = "h:m:s";
        this.timer;
    }
    render () {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours
        };

        let mins = date.getMinutes();
        if (mins < 10) {
            mins = '0' + mins
        };

        let secs = date.getSeconds();
        if (secs < 10) {
            secs = '0' + secs
        };

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop () {
        clearInterval(this.timer);
    };

    start () {
        this.timer = setInterval(this.render.bind(this), 1000);
    };
}


let clock = new Clock({template: 'h:m:s'});
// console.log(clock);
clock.start();

// 4.

console.log("\n4:")

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.chChannel = function () {
            this.channel = Math.round(Math.random() * 49 + 1);
        }
        this.inVol = function () {
            if (this.volume < 100) {
                this.volume++;
                return `${brand} at channel ${this.channel}, volume ${this.volume}`;
            } else {
                return `Your ${this.brand}  TV is at max. volume!`;
            }
        };
        this.deVol = function () {
            if (this.volume >= 0) {
                this.volume--;
                return `${brand} at channel ${this.channel}, volume ${this.volume}`;
            } else {
                return `Your ${this.brand}  TV is at min. volume!`;
            }
        };
        this.status = function () {
            return `${brand} at channel ${this.channel}, volume ${this.volume}`;
        }
    }

}

const myTV = new TV("Telefunken");
console.log(myTV);

myTV.chChannel();
console.log(myTV.status());

console.log(myTV.deVol());
console.log(myTV.inVol());