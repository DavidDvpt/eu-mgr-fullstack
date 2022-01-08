import Router from 'koa-router'
import auth from './auth'
import category from './category'
import type from './type'

const router = new Router()

router.get('/api', async (ctx, next) => {
    ctx.body = "l'api fonctionne !!!!!!!"

    await next()
})

router.use(auth.routes(), auth.allowedMethods())
router.use('/api', category.routes(), category.allowedMethods())
router.use('/api', type.routes(), type.allowedMethods())

export default router
