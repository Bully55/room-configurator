import { SubParam } from "../typings"
import nanoid from "nanoid"

export const ceilingParams: SubParam[] = [
    {
        id: nanoid(),
        text: "Натяжной потолок ПВХ белый матовый",
        price: 10000,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Гипсокартонный потолок",
        price: 14500
    },
    {
        id: nanoid(),
        text: "Оштукатуренный потолок",
        price: 20000
    },
]

export const wallParams: SubParam[] = [
    {
        id: nanoid(),
        text: "Оштукатуривание стен по маякам толщиной до 2 см",
        price: 8000,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Оштукатуривание стен по маякам толщиной до 3 см",
        price: 10000
    },
    {
        id: nanoid(),
        text: "Оштукатуривание стен по маякам толщиной до 4 см",
        price: 46000
    },
    {
        id: nanoid(),
        text: "Оштукатуривание стен по маякам толщиной до 5 см",
        price: 63000
    },
]

export const floorParams: SubParam[] = [
    {
        id: nanoid(),
        text: "Базовая стяжка (до 60мм)",
        price: 12500,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Повышенная стяжка (до 100мм)",
        price: 15500
    },
    {
        id: nanoid(),
        text: "Базовая стяжка (до 150мм)",
        price: 23500
    },
]

export const wallDecoration: SubParam[] = [
    {
        id: nanoid(),
        text: "Покраска",
        price: 10000,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Обои под покраску",
        price: 23791
    },
]

export const floor: SubParam[] = [
    {
        id: nanoid(),
        price: 10000,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg"],
        descr: "description",
        defaultChecked: true
    },
    {
        id: nanoid(),
        price: 15000,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
    {
        id: nanoid(),
        price: 20000,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture2.jpg"],
        descr: "description"
    },
    {
        id: nanoid(),
        price: 22467,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
]

export const skirtingBoard: SubParam[] = [
    {
        id: nanoid(),
        price: 9670,
        text: "Плинтус в цвет стен",
        descr: "description 2",
        defaultChecked: true
    },
    {
        id: nanoid(),
        price: 15366,
        text: "Современный плинтус",
        descr: "description 3"
    },
    {
        id: nanoid(),
        price: 19256,
        text: "Классический плинтус",
        descr: "description 4"
    },
    {
        id: nanoid(),
        price: 22590,
        text: "Современный высокий плинтус",
        descr: "description 5"
    },
    {
        id: nanoid(),
        price: 28467,
        text: "Классический высокий плинтус",
        descr: "description 6"
    },
]

export const cornice: SubParam[] = [
    {
        id: nanoid(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Без карниза",
        descr: "descript",
        defaultChecked: true
    },
    {
        id: nanoid(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX109",
        descr: "descript" 
    },
    {
        id: nanoid(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX100",
        descr: "descript" 
    },
    {
        id: nanoid(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX119",
        descr: "descript" 
    },
]

// Options

export const draftMaterials: SubParam[] = [
    {
        id: nanoid(),
        text: "Черновые материалы Старатели / Перфекта",
        price: 214,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Черновые материалы Кнауф Ротбанд / Weber / Sheetrock",
        price: 896
    },
]

export const soundInsulation: SubParam[] = [
    {
        id: nanoid(),
        text: "Без шумоизоляции",
        price: 251,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Шуманет-100 Гидро",
        price: 843
    },
    {
        id: nanoid(),
        text: "Шуманет-100 Супер",
        price: 1244
    },
]

export const electricalPanel: SubParam[] = [
    {
        id: nanoid(),
        text: "Базовый",
        price: 299,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: "Базовый+",
        price: 590
    },
    {
        id: nanoid(),
        text: "Максимальный",
        price: 1454
    },
]

export const designProj: SubParam[] = [
    {
        id: nanoid(),
        text: 'Дизайн-проект "Базовый"',
        price: 239,
        defaultChecked: true
    },
    {
        id: nanoid(),
        text: 'Дизайн-проект "Расширенный"',
        price: 550
    },
    {
        id: nanoid(),
        text: 'Дизайн-проект "Максимальный"',
        price: 1334
    },
]