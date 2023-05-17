import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import testimonios from './testimonios.module.css'


function Testimonios() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <div className={`${testimonios.contenedor}`}>
                    <div
                        className={`${testimonios.imagen1}`}
                    />
                </div>
                <Carousel.Caption>
                    <h3>Mariah Kate</h3>
                    <p>"Adopta un perri me cambió la vida. Soy tan feliz con mi Galgo"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className={`${testimonios.contenedor}`}>
                    <div
                        className={`${testimonios.imagen2}`}
                    />
                </div>
                <Carousel.Caption>
                    <h3>Anna Deyna</h3>
                    <p>"¡Desde que tengo a mi perri soy mucho más feliz!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className={`${testimonios.contenedor}`}>
                    <div
                        className={`${testimonios.imagen3}`}
                    />
                </div>
                <Carousel.Caption>
                    <h3>John Doe</h3>
                    <p>"Mi perrita Lara me acompaña a donde vaya, es mi mejor amiga"</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Testimonios