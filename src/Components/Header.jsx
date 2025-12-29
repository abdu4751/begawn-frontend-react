import {  useState } from 'react';
import logo from '../assets/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";



export const Header = () => {
  let [toggleBar,setToggleBar]=useState(false)
  return (
   <header className='bg-white shadow-[0_4px_11px_rgba(0,0,0,0.08)] fixed top-0 left-0 w-full z-50   ' >
   <div className=' max-w-[1350px] font-primary mx-auto flex justify-between items-center md:px-[10px] px-[30px] md:py-[10px] py-[15px] md:left-[-100%] left-0  '>
    <figure>
      <img src={logo} alt="" className='md:w-auto md:h-auto w-[130px] h-[58px]' />
    </figure>
    <nav className={`md:static duration-300 fixed z-50 left-0 top-0 md:w-auto md:h-auto h-screen  w-[50%] md:bg-transparent bg-logoColor ${toggleBar?"left-[0]":"left-[-100%]"}`}>
      <ul className='flex md:gap-[40px] gap-[30px] md:flex-row flex-col md:pt-0 mt-[10px]  md:text-black text-white '>
        <li><a  className='md:pl-0 pl-[15px] md:hover:border-b-3 md:border-logoColor md:pb-6 '>Home</a></li>
        <li><a  className='md:pl-0 pl-[15px] md:hover:border-b-3 md:border-logoColor md:pb-6'>Our Services</a></li>
        <li><a   className='md:pl-0 pl-[15px] md:hover:border-b-3 md:border-logoColor md:pb-6'>Why Choose us</a></li>
        <li><a    className='md:pl-0 pl-[15px] md:hover:border-b-3 md:border-logoColor md:pb-6'>Stack</a></li>
        <li><a   className='md:pl-0 pl-[15px] md:hover:border-b-3 md:border-logoColor md:pb-6'>Portfolio</a></li>
        <li className='md:hidden block md:pl-0 pl-[15px]  '><a href="" className='p-[8px_15px] text-[14px] rounded-xl  bg-white text-logoColor  ' >Contact Us</a></li>
      </ul>
      
    </nav>
    <div>
        <button className='md:block hidden text-[14px] p-[12px_24px]  bg-logoColor rounded-xl text-white'>Contact Us</button>
      </div>
      <div className='md:hidden block'>
        <FaBarsStaggered className='text-3xl' onClick={()=>setToggleBar(!toggleBar)} />

      </div>
   </div>
   </header>
  )
}
