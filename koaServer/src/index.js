const Koa = require('koa');

const app = new Koa();


app.listen(3000, function(err) {
    if (err) {
        console.error('Error listening in port 3000', err);
        process.exit(1);
    }
    console.log('Koa server listening in port 3000');
});