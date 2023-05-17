//Componente tipo funcion
import Productos from "../Components/Productos";
import Moto from "../Components/Moto";
import home from "./home.module.css";
import MyCarousel from "../Components/MyCarousel";

function Home() {
  return (
    <>
    <br />
      <div className={home.hero}></div>
      <Moto/>
      <MyCarousel />
      <Productos />
    </>
  );
}

export default Home;
