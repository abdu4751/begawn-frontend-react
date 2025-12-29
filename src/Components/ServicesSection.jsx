import userManual from '../assets/userManual.png'
import aipDocumentation from '../assets/Api.png'
import caseStudies from '../assets/caseStudies.png'
import traning from '../assets/traning.png'

export const ServicesSection = () => {
  return (
    <div className="max-w-[1350px] mx-auto lg:mt-[106px] md:mt-[90px] sm:mt-[60px] mt-[20px] md:pb-[40px] ">
        <h1 className="text-center font-headings font-bold lg:text-[56px] md:text-[44px] sm:text-[36px] text-[28px] ">Our Services</h1>
        <div className=" grid md:grid-cols-4 grid-cols-2 justify-center gap-[20px] md:px-0 px-[30px] md:mt-[30px] mt-5 " >
                <div className='flex flex-col justify-center items-center border-2  border-[#D9D9D9] p-[15px] rounded-2xl  bg-gradient-to-b from-white/20 to-[#4A85F2]/20
  backdrop-blur-[200px] hover:shadow-xl hover:shadow-[#d9d9d9] '>
                    <h1 className="md:text-[24px] font-bold font-headings text-[16px] md:mb-[44px] mb-[30px]">User Manuals & Guides</h1>
                    
                    <img src={userManual} className='md:w-[196px] md:h-[228px] w-[150px] h-[180px]' />
                </div>
                  <div className='flex flex-col justify-center items-center border-2 border-[#D9D9D9] p-[15px] rounded-2xl  bg-gradient-to-b from-white/20 to-[#4AF2B7]/20
  backdrop-blur-[200px] hover:shadow-xl hover:shadow-[#d9d9d9]  '>
                    <h1 className="md:text-[24px] font-bold font-headings text-[16px] md:mb-[44px] mb-[30px]">API Documentation</h1>
                    
                    <img src={aipDocumentation} className="md:w-[196px] md:h-[228px] w-[150px] h-[180px]"   />
                </div>
                   <div className='flex flex-col justify-center items-center border-2 border-[#D9D9D9] p-[15px] rounded-2xl  bg-gradient-to-b from-white/20 to-[#FA6C6C]/20
  backdrop-blur-[200px] hover:shadow-xl hover:shadow-[#d9d9d9] '>
                    <h1 className="md:text-[24px] font-bold font-headings text-[16px] md:mb-[44px] mb-[30px]">Whitepapers & Case Studies</h1>
                    
                    <img src={caseStudies} className="md:w-[196px] md:h-[228px] w-[150px] h-[180px]"   />
                </div>
                  <div className='flex flex-col justify-center items-center border-2 border-[#D9D9D9] p-[15px] rounded-2xl  bg-gradient-to-b from-white/20 to-[#F2D94A]/20
  backdrop-blur-[200px]  hover:shadow-xl hover:shadow-[#d9d9d9]'>
                    <h1 className="md:text-[24px] font-bold font-headings text-[16px] md:mb-[44px] mb-[30px]">Training Materials </h1>
                    
                    <img src={traning} className=" md:w-[196px] md:h-[228px] w-[150px] h-[180px]" />
                </div>
                    
        </div>


    </div>
  )
}
