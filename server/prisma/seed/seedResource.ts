import * as csv from '@fast-csv/parse'
import * as fs from 'fs'
import * as path from 'path'

export interface IItem {
    id?: number
    name: string
    createdAt?: string
    updatedAt?: string
    isActive: boolean
    ttPrice?: number
    decay?: number
    source?: string | null
    foundOn?: string | null
    typeId: number
}

export default function seedResources(
    resourceName: string,
    typeId: number | null
): Promise<IItem[]> {
    const file = path.join(process.cwd(), `prisma/csvDatas/${resourceName}.csv`)
    const items: IItem[] = []
    return new Promise<IItem[]>((resolve, reject) => {
        fs.createReadStream(file)
            .pipe(csv.parse({ headers: true }))
            .on('error', (error) => {
                console.error(error)
                reject(error)
            })
            .on('data', (row) => {
                const temp: IItem = {
                    name: row.name,
                    decay: 0,
                    ttPrice: row.maxTT === ' ' ? 0 : parseFloat(row.maxTT),
                    source: null,
                    foundOn: null,
                    isActive: true,
                    typeId: parseInt(row.typeId, 10),
                }
                items.push(temp)
            })
            .on('end', (rowCount: number) => {
                console.log(`Parsed ${rowCount} rows`)
                resolve(items)
            })
    })
}
