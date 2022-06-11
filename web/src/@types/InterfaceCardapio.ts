export interface InterfaceCardapio {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "rating": number,
    "image": string,
    "category": InterfaceCategory
}

export interface InterfaceCategory{
    "id": number,
    "name": string,
    "image": string,
}

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}