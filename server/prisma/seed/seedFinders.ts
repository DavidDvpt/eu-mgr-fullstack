import * as csv from '@fast-csv/parse'
import * as fs from 'fs'
import * as path from 'path'

const file = path.join(process.cwd(), 'prisma/csvDatas')

export default function seedFinders() {
    const finders: IItem[] = []
    return new Promise((resolve, reject) => {
        fs.createReadStream(file)
            .pipe(csv.parse({ headers: true }))
            .on('error', (error) => {
                console.error(error)
                reject(error)
            })
            .on('data', (row) => {
                const { source, foundOn, name } = row
                const temp: IItem = {
                    name,
                    decay: row.decay ?? 0,
                    ttPrice: row.maxTT ?? 0,
                    source,
                    foundOn,
                    isActive: true,
                    typeId: 1,
                }
                finders.push(temp)
                console.log(row, finders)
            })
            .on('end', (rowCount: number) => {
                console.log(`Parsed ${rowCount} rows`)
                resolve(finders)
            })
    })
}
