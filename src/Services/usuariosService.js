//import { Alert } from "react-bootstrap";
import firebase from "../Config/firebase";

export async function create(payload){
   const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
   console.log("Create ID del usuario:", responseUser.user.uid)
   //let exito = "Se ha registrado con éxito!!!";
   //let fracaso = "Su registro falló, pruebe nuevamente";
   //let mensaje = (responseUser.user.uid !== undefined)? exito: fracaso;
   //alert(mensaje);
   //alert("Se ha registrado con éxito!!!")
   const document = await firebase.firestore().collection("usuarios")
   .add({
    name:payload.nombre,
    lastname:payload.apellido,
    userId:responseUser.user.uid
   })
   console.log(document)
   

   return document
}

export async function login(email,password){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email,password)
    return responseUser.user.uid
}
