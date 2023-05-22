//import instance from "../Config/axios"
import firebase from "../Config/firebase";

export async function getAllCompradores() {
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then(res=>res.json())
    // return instance.get(`/sites/MLA/search?q=${buscar}`)
    return await firebase.firestore().collection("pagos")
        .get()
}
export async function getCompradorById(id) {
    // return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
    // return instance.get(`/items/${id}`)
    return await firebase.firestore().doc(`pagos/${id}`)
        .get()
}
export async function createComprador(payload) {
    return await firebase.firestore().collection("pagos")
        .add(payload)

}
export async function updateComprador(id, payload) {
    return await firebase.firestore().doc(`pagos/${id}`)
        .set(payload)

}
export async function deleteComprador(id) {
    return await firebase.firestore().doc(`pagos/${id}`)
        .delete()

}



