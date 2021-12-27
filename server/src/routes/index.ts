import Router from 'koa-router';
import auth from './auth';

const router = new Router();


router.get('/', async (ctx, next)=> {
    ctx.body = {msg: "hello world ca fnne même en  !!!!!!"}

    await next()
})

router.get('/test', async (ctx, next)=> {
    ctx.body = {msg: "test  !!!!!!"}

    await next()
})

router.use(auth.routes(),auth.allowedMethods())


export default router