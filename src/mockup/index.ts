import { SubParam } from "../typings"

export const ceilingParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Натяжной потолок ПВХ белый матовый",
        price: 10000,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Гипсокартонный потолок",
        price: 14500
    },
    {
        id: Math.random(),
        text: "Оштукатуренный потолок",
        price: 20000
    },
]

export const wallParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 2 см",
        price: 8000,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 3 см",
        price: 10000
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 4 см",
        price: 46000
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 5 см",
        price: 63000
    },
]

export const floorParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Базовая стяжка (до 60мм)",
        price: 12500,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Повышенная стяжка (до 100мм)",
        price: 15500
    },
    {
        id: Math.random(),
        text: "Базовая стяжка (до 150мм)",
        price: 23500
    },
]

export const wallDecoration: SubParam[] = [
    {
        id: Math.random(),
        text: "Покраска",
        price: 10000,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Обои под покраску",
        price: 23791
    },
]

export const floor: SubParam[] = [
    {
        id: Math.random(),
        price: 10000,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg"],
        descr: "description",
        defaultChecked: true
    },
    {
        id: Math.random(),
        price: 15000,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
    {
        id: Math.random(),
        price: 20000,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture2.jpg"],
        descr: "description"
    },
    {
        id: Math.random(),
        price: 22467,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
]

export const skirtingBoard: SubParam[] = [
    {
        id: Math.random(),
        price: 9670,
        text: "Плинтус в цвет стен",
        descr: "description 2",
        defaultChecked: true
    },
    {
        id: Math.random(),
        price: 15366,
        text: "Современный плинтус",
        descr: "description 3"
    },
    {
        id: Math.random(),
        price: 19256,
        text: "Классический плинтус",
        descr: "description 4"
    },
    {
        id: Math.random(),
        price: 22590,
        text: "Современный высокий плинтус",
        descr: "description 5"
    },
    {
        id: Math.random(),
        price: 28467,
        text: "Классический высокий плинтус",
        descr: "description 6"
    },
]

export const cornice: SubParam[] = [
    {
        id: Math.random(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Без карниза",
        descr: "descript",
        defaultChecked: true
    },
    {
        id: Math.random(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX109",
        descr: "descript" 
    },
    {
        id: Math.random(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX100",
        descr: "descript" 
    },
    {
        id: Math.random(),
        image: "/static/img/texture.jpg",
        price: 0,
        text: "Orac Decor CX119",
        descr: "descript" 
    },
]

// Options

export const draftMaterials: SubParam[] = [
    {
        id: Math.random(),
        text: "Черновые материалы Старатели / Перфекта",
        price: 214
    },
    {
        id: Math.random(),
        text: "Черновые материалы Кнауф Ротбанд / Weber / Sheetrock",
        price: 896
    },
]

export const soundInsulation: SubParam[] = [
    {
        id: Math.random(),
        text: "Без шумоизоляции",
        price: 251
    },
    {
        id: Math.random(),
        text: "Шуманет-100 Гидро",
        price: 843
    },
    {
        id: Math.random(),
        text: "Шуманет-100 Супер",
        price: 1244
    },
]

export const electricalPanel: SubParam[] = [
    {
        id: Math.random(),
        text: "Базовый",
        price: 299
    },
    {
        id: Math.random(),
        text: "Базовый+",
        price: 590
    },
    {
        id: Math.random(),
        text: "Максимальный",
        price: 1454
    },
]

export const designProj: SubParam[] = [
    {
        id: Math.random(),
        text: 'Дизайн-проект "Базовый"',
        price: 299
    },
    {
        id: Math.random(),
        text: 'Дизайн-проект "Расширенный"',
        price: 550
    },
    {
        id: Math.random(),
        text: 'Дизайн-проект "Максимальный"',
        price: 1334
    },
]