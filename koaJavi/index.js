class Dog {
    constructor(name) {
        this.name = name;
    }
    doSound() {
        console.log('Guau Guau');
    }
}
const myDog = new Dog('Tobby');
myDog.doSound();

class Cat {
    constructor(name) {
        this.name = name;
    }
    doSound() {
        console.log('miau miau')
    }

}
const myCat = new Cat('Snuggles');
myCat.doSound()