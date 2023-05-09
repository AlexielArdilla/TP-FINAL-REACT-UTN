import instance from "../Config/axios"

export function getAllProductos(buscar="ipod"){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then(res=>res.json())
    return instance.get(`/sites/MLA/search?q=${buscar}`)
}
export function getById(id){
    // return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
    return instance.get(`/items/${id}`)
}
