import prismaClient from '../prismaClient'
import seedCategories from './seed/seedCategories'
import seedResources from './seed/seedResource'
import seedTools from './seed/seedTools'
import seedTypes from './seed/seedTypes'

export interface IItem {
    id?: number
    name: string
    createdAt?: string
    updatedAt?: string
    isActive: boolean
    ttPrice?: number
    decay?: number
    source?: string
    foundOn?: string
    typeId: number
}

const error = (err: any): void => {
    console.error(err)
    process.exit(1)
}

seedCategories()
    .then((resultCat) => {
        console.log('seed Categories', resultCat)
        seedTypes()
            .then((resultType) => {
                console.log('seed Types', resultType)
                seedTools('Finder', 1).then(
                    (finders) => {
                        console.log('seed Finders', finders.length)
                        return prismaClient.item.createMany({
                            data: finders,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedTools('Excavator', 2).then(
                    (excavators) => {
                        console.log('seed excavators', excavators.length)
                        return prismaClient.item.createMany({
                            data: excavators,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedTools('Refiners', 3).then(
                    (refiners) => {
                        console.log('seed refiners', refiners.length)
                        return prismaClient.item.createMany({
                            data: refiners,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedTools('FinderAmplifier', 10).then(
                    (finderAmplifiers) => {
                        console.log(
                            'seed finderAmplifiers',
                            finderAmplifiers.length
                        )
                        return prismaClient.item.createMany({
                            data: finderAmplifiers,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedTools('FinderEnhancer', null).then(
                    (finderEnhancer) => {
                        console.log(
                            'seed finderEnhancer',
                            finderEnhancer.length
                        )
                        return prismaClient.item.createMany({
                            data: finderEnhancer,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedTools('ExcavatorEnhancer', null).then(
                    (excavatorEnhancer) => {
                        console.log(
                            'seed excavatorEnhancer',
                            excavatorEnhancer.length
                        )
                        return prismaClient.item.createMany({
                            data: excavatorEnhancer,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedResources('RefinedOre', 8).then(
                    (refinedOre) => {
                        console.log('seed refinedOre', refinedOre.length)
                        return prismaClient.item.createMany({
                            data: refinedOre,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedResources('RefinedEnmatter', 7).then(
                    (refinedEnmatter) => {
                        console.log(
                            'seed refinedEnmatter',
                            refinedEnmatter.length
                        )
                        return prismaClient.item.createMany({
                            data: refinedEnmatter,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )

                seedResources('RefinedTreasure', 9).then(
                    (refinedTreasure) => {
                        console.log(
                            'seed refinedTreasure',
                            refinedTreasure.length
                        )
                        return prismaClient.item.createMany({
                            data: refinedTreasure,
                        })
                    },
                    (e) => {
                        error(e)
                    }
                )
            })
            .catch((e) => {
                error(e)
            })
    })
    .catch((e) => {
        error(e)
    })
    .catch((e) => {
        error(e)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })
