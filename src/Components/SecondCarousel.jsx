import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trendSpider from '../assets/trendSpider.png'
import InstaWip from '../assets/InstaWip.png'
import knowiGroup from '../assets/knowiGroup.png'
import amoveGroup from '../assets/amoveGroup.png'
import intelGroup from '../assets/intelGroup.png'
import tataGroup from '../assets/tataGroup.png'

export  const SecondCarousel=()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="md:mt-[80px] mt-[40px]" >
            <img src={trendSpider} alt="" className="mx-auto mb-[30px] " />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">"Love Muze. Great guy, great worker, cares deeply and does a good job. Will work with again."</h3>
        </div>
      </div>
     
      <div>
        <div className="md:mt-[80px] mt-[40px]" >
            <img src={InstaWip} alt="" className="mx-auto mb-[30px] " />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">"Muze was always responsive and very good at understanding knowledge base <br className="md:block hidden" /> development and technical writing. Great to work with!"</h3>
        </div>
      </div>
      <div>
        <div className="md:mt-[80px] mt-[40px]" >
            <img src={knowiGroup} alt="" className="mx-auto mb-[30px]" />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">"Muza is a great person - he helped us a lot with the project. He works hard<br className="md:block hidden" />and fast, and knows what he is talking about! I would highly recommend Muza.<br className="md:block hidden" />Thank you!"

."</h3>
        </div>
      </div>

      <div>
        <div className="md:mt-[80px] mt-[40px]" >
            <img src={amoveGroup} alt="" className="mx-auto mb-[30px] " />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">""Great experience getting all technical documentation completed.</h3>
        </div>
      </div>
      <div>
        <div className="md:mt-[80px] mt-[40px]" >
            <img src={intelGroup} alt="" className="mx-auto mb-[30px]" />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">"Great worker, communicates very well and is very helpful. Worker also open to help<br className="md:block hidden" /> the project wherever they can, with useful suggestions. Great quality work and very<br className="md:block hidden" /> thoughtful when delivering."

</h3>
        </div>
      </div>
       <div>

        <div className="md:mt-[80px] mt-[40px]" >
            <img src={tataGroup} alt="" className="mx-auto mb-[30px] " />
            <h3 className="text-center lg:text-[27px] md:text-[22px] sm:text-[18px] text-[14px] md:mb-[80px] mb-[50px]  font-primary">"Muze was always responsive and very good at understanding knowledge base <br className="md:block hidden" /> development and technical writing. Great to work with!"</h3>
        </div>
      </div>
      
      

     
    </Slider>
  );
}