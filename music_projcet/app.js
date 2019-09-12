const Koa = require('koa')
const Router = require('koa-router')


const userRouter = require('./routers/user')
const musicRouter = require('./routers/music')

//创建服务
let app = new Koa();

app.listen(8888, ()=>{
    console.log("开启服务器")
});

const path = require('path');

const render = require('koa-art-template');
render(app, {
    debug:process.env.NODE_ENV !== 'production',
    extname: '.html',
    root: path.join(__dirname, 'views')
});

let router = new Router();
router.get('/',async ctx => {
    ctx.render('index')
});

//
app.use(async (ctx,next)=>{
    if(ctx.url.startsWith('/public')){
        ctx.url = ctx.url.replace('/public', '')
    }

    await next()
    //方形
});

//静态资源
app.use(require('koa-static')(path.resolve('./public')))
//路由''

app.use(userRouter.routes());
app.use(musicRouter.routes());

app.use(userRouter.allowedMethods);


