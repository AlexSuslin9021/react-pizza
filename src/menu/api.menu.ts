import {instance} from "../common/api/api";

export const menuApi={
    getPizza(){
       return  instance.get<PizzaType[]>('Items')
    },
}

export type PizzaType={
    "id": number,
    "imageUrl": string,
    "title": string,
    "types": number[]
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number
}
type ParamType={
    isActive:number
    filter:string
    sort:string
}