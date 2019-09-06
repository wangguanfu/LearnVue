const express = require('express')

let server = express();

server.use(function(req,res,next){
    res.send('express ok')


})

server.listen(8888,()=>{
    console.log("888")
})



const Koa = require('koa');
let server2 = new Koa()
server2.use(function (context) {
    context.body = 'koa ok'
})
server2.listen(9999,()=>{
    console.log("koa")
})








