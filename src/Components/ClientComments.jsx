import React from 'react'
import {SecondCarousel} from './SecondCarousel'

export const ClientComments = () => {
  return (
    <div className='md:mt-[60px] mt-[30px] mt-30px md:px-0 px-[30px]'>
        
        <div className='max-w-[1350px] mx-auto border-2 border-borderColor rounded-xl bg-[#FDF8F4] md:py-[60px] py-[40px] md:px-0 px-[20px]'>
            <h1 className='text-center font-headings md:text-[40px] sm:text-[32px] text-[28px] font-bold   '>What do our clients say about us?</h1>
           
                 <SecondCarousel></SecondCarousel>
           
           
        </div>
    </div>
  )
}
