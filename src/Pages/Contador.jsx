import  { useState } from "react";

function Contador(){
  const [cantidad,setCantidad] = useState(0)

  const handleClickDecrementar = ()=>{
    setCantidad(cantidad-1)
  }
  const handleClickIncrementar = ()=>{
    setCantidad(cantidad+1)
  }

  return (
    <div>
      <button onClick={handleClickDecrementar}>Decrementar</button>
      <span>{cantidad}</span>
      <button onClick={handleClickIncrementar}>Incrementar</button>
    </div>
  )
}

export default Contador;
