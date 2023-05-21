import Carousel from 'react-bootstrap/Carousel';
import myCarousel from './myCarousel.module.css';

function MyCarousel() {

  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div
          className={`d-block w-100 ${myCarousel.imagen1}`} 
        />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Border-Collie</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div
          className={`d-block w-100 ${myCarousel.imagen2}`} 
        />

        <Carousel.Caption>
          <h3 style={{color:"white"}}>Galgo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div
          className={`d-block w-100 ${myCarousel.imagen3}`} 
        />

        <Carousel.Caption>
          <h3 style={{color:"white"}}>Callejero</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;