import Router from 'koa-router'
import { isEmpty } from 'lodash'
import prismaClient from '../../prismaClient'

const category = new Router({ prefix: '/category' })

category.get('/', async (ctx, next) => {
    const queries = ctx.query
    console.log('queries', queries)
    if (!isEmpty(queries)) {
        const categories = await prismaClient.category.findUnique({
            where: queries,
        })
        ctx.body = categories
        ctx.status = 200
    } else {
        const categories = await prismaClient.category.findMany()
        ctx.body = categories
        ctx.status = 200
    }

    await next()
})

// category.get('/:id', async (ctx, next) => {
//     const { id } = ctx.params
//     const categories = await prismaClient.category.findUnique({
//         where: {
//             id: parseInt(id, 10),
//         },
//     })
//     ctx.body = categories
//     ctx.status = 200

//     await next()
// })

category.post('/', async (ctx, next) => {
    const { body } = ctx.request

    const newCategory = await prismaClient.category.create({ data: body })

    ctx.body = newCategory
    ctx.status = 201

    await next()
})

category.put('/:id', async (ctx, next) => {
    const { body } = ctx.request
    const { id } = ctx.params

    const newCategory = await prismaClient.category.update({
        where: {
            id: parseInt(id, 10),
        },
        data: body,
    })

    ctx.body = newCategory
    ctx.status = 200

    await next()
})

category.delete('/:id', async (ctx, next) => {
    const { id } = ctx.params

    const newCategory = await prismaClient.category.update({
        where: {
            id: parseInt(id, 10),
        },
        data: {
            isActive: false,
        },
    })

    ctx.body = newCategory
    ctx.status = 204

    await next()
})

export default category
