//import instance from "../Config/axios"
import firebase from "../Config/firebase";

export async function getAllProductos(buscar="ipod"){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then(res=>res.json())
    // return instance.get(`/sites/MLA/search?q=${buscar}`)
    return await firebase.firestore().collection("productos")
    .get()
}
export async function getById(id){
    // return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
    // return instance.get(`/items/${id}`)
    return await firebase.firestore().doc(`productos/${id}`)
    .get()
}
export async function create(payload){
    return await firebase.firestore().collection("productos")
    .add(payload)
    
}
export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`)
    .set(payload)
    
}
export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`)
    .delete()
    
}

