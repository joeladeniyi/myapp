import React from 'react'
import './works.css'
import constuction from '../../assets/construction1.png'
import ecommerce from '../../assets/ecommerce.png'
import appointment from '../../assets/appointment app.png'
import event from '../../assets/checkoutpage.png'
import { GoArrowUpRight } from "react-icons/go";

const works = () => {

  return (
    <section id='works'>
      <h2 className='workstitle font-mono'> My Portfolio</h2>
      <span className='worksdesc font-mono'> I take pride in crafting visually stunning, user-friendly web experiences that not only look great but also function seamlessly, ensuring every detail is carefully designed and executed</span>
   <div className='xs:grid xs:grid-cols-1 md:grid md:grid-cols-2 md:justify-between '>
     <div className='m-3 '>
         <img src={constuction} alt='portimg'   className='worksimg'/>
         <div className='flex justify-between'>
            <div className=''>
          <span> <a href='https://github.com/joeladeniyi/construction-company' className='flex flex-row font-mono'> <h3>Github </h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
          <div className=''>
          <span> <a href='https://construction-company-lime.vercel.app/' className='flex flex-row font-mono'> <h3>Live</h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
         </div>
         
         
    </div>
    <div className='m-3 '>
         <img src={ecommerce} alt='portimg'   className='worksimg'/>
         <div className='flex justify-between'>
            <div className=''>
          <span> <a href='https://github.com/joeladeniyi/e-commerce' className='flex flex-row font-mono'> <h3>Github </h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
          <div className=''>
          <span> <a href='https://e-commerce-snowy-zeta.vercel.app/' className='flex flex-row font-mono'> <h3>Live</h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
         </div>
         
         
    </div>
     <div className='m-3'>
        <img src={appointment} alt='portimg'   className='worksimg'/>
         <div className='flex justify-between'>
            <div className=''>
          <span> <a href='https://github.com/joeladeniyi/Appointment-App' className='flex flex-row font-mono'> <h3>Github </h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
          <div className=''>
          <span> <a href='https://appointment-app-lime.vercel.app/' className='flex flex-row font-mono'> <h3>Live</h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
         </div>
      </div>

       <div className='m-3'>
        <img src={event} alt='portimg'   className='worksimg'/>
         <div className='flex justify-between'>
            <div className=''>
          <span> <a href='https://github.com/joeladeniyi/Mern-Auth' className='flex flex-row font-mono'> <h3>Github </h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
          <div className=''>
          <span> <a href='https://github.com/joeladeniyi/Mern-Auth' className='flex flex-row font-mono'> <h3>Live</h3>    </a>  </span>
          <span> <GoArrowUpRight /> </span>
         </div>
         </div>
      </div>
      
   </div>
    </section>
  )
}

export default works
