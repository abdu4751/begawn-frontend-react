import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'

export default function CarouselSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows: false,
 
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={portfolio1} className="md:w-[1050px] md:h-[648px] sm:w-[450px] sm:h-[278px] w-[350px] h-[250px]  mx-auto" alt="" />
      </div>

      <div>
        <img src={portfolio2} className="mx-auto md:w-[1050px] md:h-[648px] sm:w-[450px] sm:h-[278px] w-[350px] h-[250px]" alt="" />
      </div>

      <div>
        <img src={portfolio3} className="mx-auto md:w-[1050px] md:h-[648px] sm:w-[450px] sm:h-[278px] w-[350px] h-[250px]"  alt="" />
      </div>

      <div>
        <img src={portfolio4} className="mx-auto md:w-[1050px] md:h-[648px] sm:w-[450px] sm:h-[278px] w-[350px] h-[250px]"  alt="" />
      </div>

      <div>
        <img src={portfolio5}  className="mx-auto md:w-[1050px] md:h-[648px] sm:w-[450px] sm:h-[278px] w-[350px] h-[250px] " alt="" />
      </div>

      
    </Slider>
  );
}
