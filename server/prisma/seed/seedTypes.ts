import prismaClient from '../../prismaClient'

const data = [
    {
        id: 1,
        name: 'Finder',
        categoryId: 1,
    },
    {
        id: 2,
        name: 'Excavator',
        categoryId: 1,
    },
    {
        id: 3,
        name: 'Refiner',
        categoryId: 1,
    },
    {
        id: 4,
        name: 'Unrefined Enmatter',
        categoryId: 2,
    },
    {
        id: 5,
        name: 'Unrefined Ore',
        categoryId: 2,
    },
    {
        id: 6,
        name: 'Unrefined Treasure',
        categoryId: 2,
    },
    {
        id: 7,
        name: 'Refined Enmatter',
        categoryId: 2,
    },
    {
        id: 8,
        name: 'Refined Ore',
        categoryId: 2,
    },
    {
        id: 9,
        name: 'Refined Treasure',
        categoryId: 2,
    },
    {
        id: 10,
        name: 'Mining Amplifier',
        categoryId: 3,
    },
    {
        id: 11,
        name: 'Excavator Speed Enhancer',
        categoryId: 3,
    },
    {
        id: 12,
        name: 'Finder Depth Enhancer',
        categoryId: 3,
    },
    {
        id: 13,
        name: 'Finder Range Enhancer',
        categoryId: 3,
    },
    {
        id: 14,
        name: 'Finder Skill Enhancer',
        categoryId: 3,
    },
]

export default function seedTypes() {
    return prismaClient.type.createMany({
        data,
    })
}
