import linkdin from '../assets/linkdin.png'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


export const Footer = () => {  return (
    <div className='mt-[60px] py-[40px] px-[30px] bg-[#254C86]'>
      <div>
           <h1 className='font-headings font-[700] text-white lg:text-[56px] md:text-[48px] text-[28px]  mb-3 text-center'>Let’s Connect</h1>
               <p className='font-primary md:text-[18px] text-[16px]  text-white md:mb-6 mb-3 text-center  '>If you would like to talk to us about a project or you have a question, please get in touch.<br className="md:block hidden"/>Book the discovery call today and allow us to build a solid Knowledge Base for your product</p>

                <div className='flex  gap-[10px] items-center justify-center '>
             <img src={linkdin} className='w-[35px] md:mb-0 mb-4' alt="" />
               
            <button className="text-logoColor rounded-xl md:p-[15px_20px] p-[12px_12px] text-nowrap md:text-[18px] text-[12px] font-primary font-semibold bg-white ">Book Discovery Call</button>
            </div>
            <div className='md:w-[600px] w-[300px] border-t-1 border-borderColor md:mt-[30px] mt-[15px] mx-auto '></div>
               </div>
               <div className='max-w-[1350px] mx-auto  md:mt-[25px]  grid md:grid-cols-2 grid-cols-1 '>
               <div className='text-center text-white   '>
            <h1 className='font-bold text-[20px] md:mb-6 mb-4 mt-[15px] '>Quick Links</h1>
            <ul className='flex md:flex-col  flex-row  justify-center flex-wrap md:gap-[10px] gap-[15px]' >
              <li className=' font-primary md:text-[18px] text-[16px] font-[600]'>Home</li>
              <li className=' font-primary md:text-[18px] text-[16px] font-[600]'>Our Services</li>
              <li className=' font-primary md:text-[18px] text-[16px] font-[600]'>Why Choose us</li>
              <li className=' font-primary md:text-[18px] text-[16px] font-[600]'>Stack</li>
              <li className=' font-primary md:text-[18px] text-[16px] font-[600]'>Portfolio</li>
            </ul>
          </div>
           <div className='md:hidden block w-[300px] border-t-1 border-borderColor md:mt-[30px] mt-[15px] mx-auto '></div>
               <div className='place-self-center'>
                  <h1 className='font-bold text-[20px] md:mb-6 mb-4 text-white md:text-left text-center mt-[15px]  '>Contacts</h1>
                  <div className='md:block flex justify-center gap-3 gap-[40px] flex-wrap '>

                    <div className='flex items-center md:gap-[15px] gap-[10px] md:mb-[30px] '>
                    <div className=''>
                      <MdLocalPhone className='text-white md:text-[35px] text-[25px] '/>
                    </div>
                    <div className='text-white'>
                      <h1 className='font-headings font-black md:text-[16px] text-[14px]'>Call us</h1>
                    <p className='font-primary md:text-[14px] text-[12px]'>079862 28254</p>
                    </div>
                     </div>
                      <div className='flex items-center md:gap-[15px] gap-[10px] md:mb-[30px]'>
                    <div className=''>
                      <MdOutlineMail className='text-white md:text-[35px] text-[25px] '/>
                    </div>
                    <div className='text-white'>
                      <h1 className='font-headings font-black md:text-[16px] text-[14px]'>Send a message</h1>
                    <p className='font-primary md:text-[14px] text-[12px]'>info@begawn.com</p>
                    </div>
                     </div>
                      <div className='flex items-center md:gap-[15px] gap-[10px] '>
                    <div>
                      <CiLocationOn className='text-white md:text-[35px] text-[25px] '/>
                    </div>
                    <div className='text-white'>
                      <h1 className='font-headings font-black  md:text-[16px] text-[14px] '>Address</h1>
                    <p className='font-primary md:text-[14px] text-[12px]'>20 Cooper Square,<br className='md:block hidden' /> New York, NY 10003, USA</p>
                    </div>
                     </div>
                  </div>
               </div>
               </div>
    </div>
  )
}
