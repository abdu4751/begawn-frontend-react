

import champions from '../assets/champions.png'
import { useState } from "react";
import { Accordion } from './Accordion';
export const WhyChooseUs = () => {
  
  return (
    <div className="max-w-[1350px] mx-auto md:mt-[60px] mt-[30px]   md:border-2 md:border-[#D9D9D9] md:rounded-4xl md:bg-[#F2714A]/5 md:px-0 px-[30px] md:shadow-xl hover:shadow-[#d9d9d9] ">
       <div className="md:py-[50px]  grid md:grid-cols-2 items-center mx-auto"> 
        <div className=" md:px-[50px]">
        <h1 className='font-bold font-headings lg:text-[46px] md:text-[40px] sm-[36px] text-[36px] md:mb-8 mb-2' >Why Choose Us</h1>
        <div > 
          <Accordion></Accordion>
      
        </div>
        
       

        </div>
        <div className='mx-auto'>
            <img src={champions} className="lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] md:mt-0 mt-4" />
        </div>
       </div>
    </div>
  )
}
