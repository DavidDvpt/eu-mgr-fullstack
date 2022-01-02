interface IItem {
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
