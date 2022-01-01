import prismaClient from '../../prismaClient'

const data = [
    {
        id: 1,
        name: 'Tool',
    },
    {
        id: 2,
        name: 'Ressource',
    },
    {
        id: 3,
        name: 'Accessoire',
    },
]

export default function seedCategories() {
    return prismaClient.category.createMany({
        data,
    })
}
