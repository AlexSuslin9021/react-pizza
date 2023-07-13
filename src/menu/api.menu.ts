import {instance} from "../common/api/api";

export const menuApi={
    getPizza(arg:ParamType){
       return  instance.get<PizzaType[]>(`Items?page=${arg.isActive}&limit=4&${arg.filter}${arg.sort}`)
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
    count:number
}
type ParamType={
    isActive:number
    filter:string
    sort:string
}