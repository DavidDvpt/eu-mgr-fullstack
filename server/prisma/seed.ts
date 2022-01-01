import prismaClient from '../prismaClient'
import seedCategories from './seed/seedCategories'
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
