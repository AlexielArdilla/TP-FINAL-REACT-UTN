//Componente tipo funcion
import Productos from "../Components/Productos";
import Moto from "../Components/Moto";
import MyCarousel from "../Components/MyCarousel";
import Testimonios from "../Components/Testimonios";

function Home() {
  return (
    <>
    <br />
      <Moto/>
      <MyCarousel />
      <Productos />
      <Testimonios/>
    </>
  );
}

export default Home;
