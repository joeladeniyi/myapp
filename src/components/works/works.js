import React from 'react'
import './works.css'
import ticket from '../../assets/ticketspage.png'
import loginpage from '../../assets/mernloginpage.png'

const works = () => {
  return (
    <section id='works'>
      <h2 className='workstitle'> My Portfolio</h2>
      <span className='worksdesc'> I take pride in crafting visually stunning, user-friendly web experiences that not only look great but also function seamlessly, ensuring every detail is carefully designed and executed</span>
   <div className='worksimgs'>
    <img src={ticket} alt='portimg' className='worksimg'/>
     <img src={loginpage} alt='portimg' className='worksimg'/>
      <img src={ticket} alt='portimg' className='worksimg'/>
       <img src={ticket} alt='portimg' className='worksimg'/>
   </div>
    </section>
  )
}

export default works
