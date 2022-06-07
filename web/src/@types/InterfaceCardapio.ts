export interface InterfaceCardapio{
    "id":number,
    "name":string,
    "description":string,
    "price":number,
    "rating":number,
    "image":string,
    "category":{
        "id":number,
        "name":string
    }
}