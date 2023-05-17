import Carousel from 'react-bootstrap/Carousel';
import myCarousel from './myCarousel.module.css';

function MyCarousel() {

  return (
    <Carousel>
      <Carousel.Item>
        <div
          className={`d-block w-100 ${myCarousel.imagen1}`} 
        />
        <Carousel.Caption>
          <h3>Pitbull</h3>
          {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
          className={`d-block w-100 ${myCarousel.imagen2}`} 
        />

        <Carousel.Caption>
          <h3>Galgo</h3>
         {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
          className={`d-block w-100 ${myCarousel.imagen3}`} 
        />

        <Carousel.Caption>
          <h3>Callejero</h3>
          {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;