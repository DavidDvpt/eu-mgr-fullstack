import Router from 'koa-router'
import prismaClient from '../../prismaClient'

const type = new Router({ prefix: '/type' })

type.get('/', async (ctx, next) => {
    const categories = await prismaClient.type.findMany()
    ctx.body = categories
    ctx.status = 200

    await next()
})

type.get('/:id', async (ctx, next) => {
    const { id } = ctx.params
    const categories = await prismaClient.type.findUnique({
        where: {
            id: parseInt(id, 10),
        },
    })
    ctx.body = categories
    ctx.status = 200

    await next()
})

type.post('/', async (ctx, next) => {
    const { body } = ctx.request
    console.log(body)
    const newType = await prismaClient.type.create({ data: body })

    ctx.body = newType
    ctx.status = 201

    await next()
})

type.put('/:id', async (ctx, next) => {
    const { body } = ctx.request
    const { id } = ctx.params

    const newType = await prismaClient.type.update({
        where: {
            id: parseInt(id, 10),
        },
        data: body,
    })

    ctx.body = newType
    ctx.status = 200

    await next()
})

type.delete('/:id', async (ctx, next) => {
    const { id } = ctx.params

    const newType = await prismaClient.type.delete({
        where: {
            id: parseInt(id, 10),
        },
    })

    ctx.body = newType
    ctx.status = 204

    await next()
})

export default type
