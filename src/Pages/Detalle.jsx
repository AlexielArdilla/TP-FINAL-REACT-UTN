import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getById } from "../Services/productosService";
import './detalle.css';

function Detalle(){
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [producto,setProducto] = useState({})
  const [comprar, setComprar] = useState('')
  console.log("Detalle:", id)
  
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getById(id)
          // const response = await res.json()
          console.log("Producto:", response)
          setProducto(response.data)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
        
      }

      request()
      
      
    },
    [id]
  )
  

  const handleClick = ()=>{
    setComprar('Gracias por su compra!!!');
  }
  if(loading){
    return (
      <div>
        Cargando ...
      </div>
    );
  }
  return (
    <div className="producto-lista">
      <img src={producto.thumbnail} alt="imagen del  producto"/>
      <h1>{producto.title}</h1>
      <p id="precio">${producto.price}</p>
      <h2>{comprar}</h2>
      <br />
      <Button variant="primary" onClick={handleClick}>Comprar</Button>
    </div>
  );
}

export default Detalle;
