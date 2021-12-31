import Router from 'koa-router';
import auth from './auth';

const router = new Router();


router.get('/api', async (ctx, next)=> {
    ctx.body = {msg: "hello world ca fonctionne  !!!!!!"}

    await next()
})

router.use(auth.routes(),auth.allowedMethods())


export default router