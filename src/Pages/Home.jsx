//Componente tipo funcion
import Productos from "../Components/Productos";

import home from "./home.module.css";

function Home() {
  return (
    <>
    <br />
      <div className={home.hero}></div>
      <Productos />
    </>
  );
}

export default Home;
