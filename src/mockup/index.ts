import { SubParam } from "../typings"

export const ceilingParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Натяжной потолок ПВХ белый матовый",
        price: 145.947,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Гипсокартонный потолок",
        price: 145.947
    },
    {
        id: Math.random(),
        text: "Оштукатуренный потолок",
        price: 92.516
    },
]

export const wallParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 2 см",
        price: 8.089,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 3 см",
        price: 8.089
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 4 см",
        price: 46.089
    },
    {
        id: Math.random(),
        text: "Оштукатуривание стен по маякам толщиной до 5 см",
        price: 63.089
    },
]

export const floorParams: SubParam[] = [
    {
        id: Math.random(),
        text: "Базовая стяжка (до 60мм)",
        price: 12.500,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Повышенная стяжка (до 100мм)",
        price: 12.500
    },
    {
        id: Math.random(),
        text: "Базовая стяжка (до 150мм)",
        price: 23.500
    },
]

export const wallDecoration: SubParam[] = [
    {
        id: Math.random(),
        text: "Покраска",
        price: 0,
        defaultChecked: true
    },
    {
        id: Math.random(),
        text: "Обои под покраску",
        price: 23.791
    },
]

export const floor: SubParam[] = [
    {
        id: Math.random(),
        price: 0,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg"],
        descr: "description",
        defaultChecked: true
    },
    {
        id: Math.random(),
        price: 0,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
    {
        id: Math.random(),
        price: 0,
        text: "Ламинат",
        materials: ["/static/img/texture2.jpg", "/static/img/texture2.jpg"],
        descr: "description"
    },
    {
        id: Math.random(),
        price: 0,
        text: "Ламинат",
        materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg", "/static/img/texture.jpg"],
        descr: "description"
    },
]

export const skirtingBoard: SubParam[] = [
    {
        id: Math.random(),
        price: 0,
        text: "Плинтус в цвет стен",
        descr: "description 2",
        defaultChecked: true
    },
    {
        id: Math.random(),
        price: 0,
        text: "Современный плинтус",
        descr: "description 3"
    },
    {
        id: Math.random(),
        price: 0,
        text: "Классический плинтус",
        descr: "description 4"
    },
    {
        id: Math.random(),
        price: 0,
        text: "Современный высокий плинтус",
        descr: "description 5"
    },
    {
        id: Math.random(),
        price: 0,
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