
import googleDocs from '../assets/googleDocs.png'
import gitBook from '../assets/gitBook.png'
import notion from '../assets/notion.png'
import annotely from '../assets/annotely.png' 
import snagit from '../assets/snagit.png'
import greenShot from '../assets/greenShot.png'
import arcadeSoftware from '../assets/arcadeSoftware.png'
import loom from '../assets/loom.png'
import guideJar from '../assets/guideJar.png' 
import lucidChart from '../assets/lucidChart.png'
import meraaid from '../assets/meraaid.png'
import draw from '../assets/draw.png'
export const Documentation = () => {
  return (
    <div className="max-w-[1350px] mx-auto md:mt-[60px] mt-[30px]">
        <h1 className="text-center font-headings font-bold lg:text-[56px] md:text-[44px] sm:text-[36px] text-[30px]">Our Documentation Stack</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[30px] md:px-0 px-[30px] mt-6">
            <div className="h-[370px] bg-[#E1F5F9] rounded-2xl flex justify-center items-center  ">
               <div className="w-[90%] h-[300px] bg-white ml-[50px] p-[30px] shadow-xl hover:shadow-[#d9d9d9] rounded-xl">
                <h1 className='font-bold font-headings md:text-[32px] text-[28px] mb-[30px]'>Writing</h1>
               
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={googleDocs} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Google Docs</p>
                    </div>
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={gitBook} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>GitBook</p>
                    </div>
                      <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={notion} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Notion</p>
                    </div>
                
               </div>
                </div>
           
           <div className="h-[370px] bg-[#EBF7F2] rounded-2xl flex justify-center items-center  ">
               <div className="w-[90%] h-[300px] bg-white ml-[50px] p-[30px] shadow-xl hover:shadow-[#d9d9d9] rounded-xl">
                <h1 className='font-bold font-headings md:text-[32px] text-[28px] mb-[30px] '>Screenshots</h1>
               
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={annotely} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Annotely</p>
                    </div>
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={snagit} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Snagit</p>
                    </div>
                      <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={greenShot} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>GreenShot</p>
                    </div>
                
               </div>
                </div>
                <div className="h-[370px] bg-[#FEF7E7] rounded-2xl flex justify-center items-center  ">
               <div className="w-[90%] h-[300px] bg-white ml-[50px] p-[30px] shadow-xl hover:shadow-[#d9d9d9] rounded-xl">
                <h1 className='font-bold font-headings md:text-[32px] text-[28px] mb-[30px]'>Demos</h1>
               
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={arcadeSoftware} className='mr-4' alt="" />
                         <p className='font-primary md:text-[21px] text-[18px]  truncate'>Arcade Software</p>
                    </div>
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={loom} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Loom</p>
                    </div>
                      <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={guideJar} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>GuideJar</p>
                    </div>
                
               </div>
                </div>
                <div className="h-[370px] bg-[#FEF7E7] rounded-2xl flex justify-center items-center  ">
               <div className="w-[90%] h-[300px] bg-white ml-[50px] p-[30px] shadow-xl hover:shadow-[#d9d9d9] rounded-xl">
                <h1 className='font-bold font-headings md:text-[32px] text-[28px] mb-[30px]'>Diagrams</h1>
               
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={lucidChart} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>LucidChart</p>
                    </div>
                    <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={meraaid} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Meraaid</p>
                    </div>
                      <div className='flex items-center md:mb-6 mb-8'>
                       
                        <img src={draw} className='mr-4' alt="" />
                         <p className='font-primary md:text-[22px] text-[18px]'>Draw.io</p>
                    </div>
                
               </div>
                </div>
             
        </div>
    </div>
  )
}
