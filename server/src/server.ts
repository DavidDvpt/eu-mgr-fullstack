import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import Router from 'koa-router';


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next)=> {
    ctx.body = {msg: "hello world ca fonctionne !!!!!!"}

    await next()
})

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods())

app.listen(8000, ()=> {
    console.log("koa started")
});