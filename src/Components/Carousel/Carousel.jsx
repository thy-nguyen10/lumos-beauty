import Carousel from 'react-bootstrap/Carousel';
import lumosbanner from '../Assets/lumosbanner.png'
import slider from '../Assets/slider.png'
import slider_2 from '../Assets/slider_2.png'
import "./Carousel.css"

function CarouselExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item className='carousel-item'>
        <img src={lumosbanner} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider_2} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;