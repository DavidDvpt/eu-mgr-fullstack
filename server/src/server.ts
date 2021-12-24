import * as Koa from 'koa';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next)=> {
    ctx.body = {msg: "hello world"}

    await next()
})

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=> {
    console.log("koa started")
});