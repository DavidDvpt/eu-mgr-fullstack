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

export default function seedTools(
    toolName: string,
    typeId: number | null
): Promise<IItem[]> {
    const file = path.join(process.cwd(), `prisma/csvDatas/${toolName}.csv`)
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
                    decay: row.decay === ' ' ? 0 : parseFloat(row.decay),
                    ttPrice: row.maxTT === ' ' ? 0 : parseFloat(row.maxTT),
                    source: row.source === ' ' ? null : row.source,
                    foundOn: row.foundOn === ' ' ? null : row.foundOn,
                    isActive: true,
                    typeId: typeId ?? parseInt(row.typeId, 10),
                }
                items.push(temp)
            })
            .on('end', (rowCount: number) => {
                console.log(`Parsed ${rowCount} rows`)
                resolve(items)
            })
    })
}
