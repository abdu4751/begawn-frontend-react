import clientLogos from '../assets/clientLogos.png'

export const HeroSection = () => {
  return (
    <div className="text-center lg:pt-[129px] md:pt-[100px] sm:pt-[70px] pt-[30px]">

        <h1 className="font-headings capitalize lg:text-[80px]  md:text-[55px] sm:text-[40px] text-[28px] font-black leading-[1.2] md:mb-[18px] mb-[12px] md:pt-0 sm:pt-[60px] pt-[80px]">A house of nerdy <br />Technical Writers</h1>
        <p className="font-primary lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] ">Simplifying complex ideas into clear &<br/>actionable documentation.</p>
        
            <h1 className="font-headings lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] font-bold lg:mt-[124px] md:mt-[90px] sm:mt-[45px] mt-[20px]">Trusted by 100+</h1>
       <div className="md:px-[50px] px-[30px] sm:mt-[27px] mt-5 md:mt-[20px]">
        <img src={clientLogos}  alt="" />
       </div>
    </div>
  )
}
