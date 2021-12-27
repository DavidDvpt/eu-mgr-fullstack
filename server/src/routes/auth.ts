import Router from 'koa-router';

const auth = new Router({prefix: '/auth'})

auth.get('/',async (ctx, next)=> {
    ctx.body = {msg: "je suis dans auth!!!"};

    await next();
})


export default auth