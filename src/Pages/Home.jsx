import Productos from "../Components/Productos";
import Moto from "../Components/Moto";
import MyCarousel from "../Components/MyCarousel";
import Testimonios from "../Components/Testimonios";

function Home() {
  return (
    <>
    <br />
    <div className="hero"></div>
      <Moto/>
      <MyCarousel />
      <Productos />
      <Testimonios/>
    </>
  );
}

export default Home;
