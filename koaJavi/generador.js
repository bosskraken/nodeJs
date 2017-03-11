function* speak() {
    yield 'Hello';
    yield 'How are you?';
    yield 'me too';
    12
    yield 'Goodbye';
}
const gen = speak();
let result = gen.next();
console.log(`Value ${result.value}; Finish?: ${result.done}`);
result = gen.next();
console.log(`Value ${result.value}; Finish?: ${result.done}`);
result = gen.next();
console.log(`Value ${result.value}; Finish?: ${result.done}`);
result = gen.next();
console.log(`Value ${result.value}; Finish?: ${result.done}`);
result = gen.next();
console.log(`Value ${result.value}; Finish?: ${result.done}`);