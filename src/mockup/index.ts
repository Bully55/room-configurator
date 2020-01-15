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