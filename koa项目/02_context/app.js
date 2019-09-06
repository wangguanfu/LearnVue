const Koa = require('koa');

let server2 = new Koa();

//中间件响应
server2.use(function (context,next) {

    console.log(context.request.url)
    console.log(context.request.method)
    console.log(context.request.header)

    context.body = 'koa ok';
    next()
})
server2.use(()=>{
    console.log('wwwwww')
})


server2.listen(8999,()=>{
    console.log("koa");
})
