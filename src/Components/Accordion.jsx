
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
export const Accordion = () => {
let [activeIndex,setActiveIndex]=useState(null)
console.log(activeIndex,"activeIndex")

let toggleAccordion=(index)=>{
    setActiveIndex(activeIndex===index?null:index)
}
    const accordionContent=[ 
        { 
            title: "Clarity Without Compromise", 
            content: "We make complex topics simple without losing accuracy, using structured content strategies and clear language to ensure easy understanding." 
        }, 
        { 
            title: "Optimized for Discovery", 
            content: "Our documentation is crafted to be both technically rigorous and SEO-friendly, striking a perfect balance between readability and discoverability."
         },
          { 
            title: "Uncompromising Quality", 
            content: "We deliver only the highest quality, with stringent quality checks and multiple review rounds to ensure accuracy, readability, and consistency."
         }
         ,
          { 
            title: "Collaborative Partnership", 
            content: "Every project is a partnership—we keep communication open and incorporate your feedback throughout, ensuring transparency and adaptability."
         }
         ,
          { 
            title: "On-Target Delivery", 
            content: "We prioritize timely delivery without compromising quality, focusing on planned execution to meet critical tech-world timelines."
         }
         ,
          { 
            title: "Industry Experts", 
            content: "Our team comprises domain-specific writers with deep expertise, enabling us to create accurate, industry-aligned content across 20+ fields"
         }


     ]; 

  return (
    <>

            {accordionContent.map((accordion,index)=>{
                 return(
                    
                        <div>
                             <div className="flex items-center md:mb-[20px] mb-[10px]">
                                {activeIndex===index?<CiCircleMinus className="text-4xl mr-4 text-logoColor" onClick={()=>toggleAccordion(index)}/>:
                                    <CiCirclePlus className="text-4xl mr-4 text-logoColor " onClick={()=>toggleAccordion(index)} />

}
                          
                        
                        <h1 className="font-bold font-headings md:text-[20px] sm:text-[18px] text-[16px] ">{accordion.title} </h1>
                      </div>
                            <p className={`md:pl-[50px] pl-[30px]  text-[15px] font-primary leading-[27px] ${activeIndex===index?"block":"hidden"}`}>{accordion.content}</p>

                        </div>

                 )
                      
            })}
                  
            
            </>
  )
}
