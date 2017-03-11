const http = require('http');
const server = http.createServer((request, response) => {
    console.log(`Request from ${request.url}`);
    response.write('Apple es una mierda');
    response.end();
});
server.listen(3000, (err) => {
    if (err) {
        return console.log('Error executing listen', err);
    }   
console.log('Server is listening in port 3000');
});