// Parmeters

export type Rooms = {
    value: number,
    text: string
}

export type SubParam = {
    id: string,
    text: string,
    price: number,
    defaultChecked?: boolean
    image?: string,
    materials?: string[],
    descr?: string
}