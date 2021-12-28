import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import cors from 'koa2-cors'
import routes from './routes'

const app = new Koa()

app.use(bodyParser())
app.use(cors({ origin: '*' }))

app.use(async (ctx, next) => {
    console.log('************************', ctx.url, '**************************')
    await next()
})

app.use(json())
app.use(logger())

app.use(routes.routes())

export default app
