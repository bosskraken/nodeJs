class Example {
    constructor(value) {
        this.value = value;
    }
    execTimeout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.value), 1000);
        })
    }
}
var p1 = new Example(1).execTimeout();
var p2 = new Example(2).execTimeout();
var p3 = new Example(3).execTimeout();
Promise.all([p1, p2, p3]).then((data) => console.log(`Succes with data ${data}`));