//Dependencies
const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const time = Date.now() - start;
    ctx.set('X-Response-Time', `${time} ms`);
});

app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const time = Date.now() - start;
    //setear el tiempo de respuesta en el header
    ctx.set('X-Response-Time', `${time} ms`);
});
app.use(async(ctx, next) => {
    console.log(`The request url is ${ctx.url}`);
    ctx.body = {
        ok: 1,
        ook: 2
    };
});
app.listen(3000, function(err) {
    if (err) {
        console.error('Error listening in port 3000', err);
        process.exit(1);
    }
    console.log('Koa server listening in port 3000');
});