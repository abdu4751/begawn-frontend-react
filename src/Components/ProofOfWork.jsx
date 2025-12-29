//import portfolio1 from '../assets/portfolio1.png'

import CarouselSlider from "./CarouselSlider.jsx"

export const ProofOfWork = () => {
  return (
    <div className='w-[100%]  md:mt-[60px] mt-[30px]'>
         <h4 className='font-headings text-center font-bold lg:text-[56px] md:text-[44px] sm:text-[36px] text-[28px]'>Portfolio</h4>
          <div className='max-w-[1350px] mx-auto md:px-0 px-[30px] md:mt-[30px] mt-[20px] '>
           
            <CarouselSlider></CarouselSlider>
            
          </div>
    </div>
  )
}
