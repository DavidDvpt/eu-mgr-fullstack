import prismaClient from '../prismaClient'
import seedCategories from './seed/seedCategories'
import seedFinders from './seed/seedFinders'
import seedTypes from './seed/seedTypes'

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
                seedFinders()
                    .then((resultFinders: any) => {
                        return prismaClient.item.createMany({
                            resultFinders,
                        })
                        console.log('seed Types', resultFinders)
                    })
                    .catch((e) => {
                        error(e)
                    })
            })
            .catch((e) => {
                error(e)
            })
    })
    .catch((e) => {
        error(e)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })
