import React from 'react'
import './skill.css'
import js from '../../assets/js.png'
import html from'../../assets/HTML5-Icon.png'
import css from '../../assets/CSS-ICON.jpeg'
import boot from '../../assets/bootstrap-social.png'
import react from '../../assets/react-logo.png'
import next from '../../assets/next-js-logo.png'
import node from '../../assets/Nodejs.png'
import express from '../../assets/express-js.png'
import mongodb from '../../assets/MongoDB.png'




const skills = () => {
  return (
    <section id='skills'>
      <span className='skilltitle font-mono'> What i do</span>
      <span className='skilldsc font-mono'> I am a skill and passionate web developer with experience in creating visually appealing and user friendly websites. I am proficient in HTLM, CSS, Javascipt react and nextjs. I am familiar with backend technology such as nodejs, express and mongodb </span>
      <div className='skillbars'>
        
        <div className='skillbar'>
      
         <div className='skillbartext'>
          <h1 className='font-mono'>Frontend Development</h1>
        
          <div className=' grid grid-cols-3'>  
             <img src={html}alt='' className='skillbarimg'/>
           <img src={css} alt='' className=''/>
            <img src={js} alt='' className=''/>
             <img src={boot} alt='' className=''/>
             <img src={react} alt='' className=''/>
             <img src={next} alt='' className=''/>
               </div>
         </div>
         
        </div>
        <div className='skillbar'>
         
         <div className='skillbartext'>
          <h1 className='font-mono'>Backend Development</h1>
          
        <div className='backendimg'>   
          <img src={node} alt='' className='skillbarimg'/>
           <img src={express} alt='' className='skillbarimg'/>
            <img src={mongodb} alt='' className='skillbarimg'/>
            
               </div>
          
         </div>
        </div>
        
      </div>

    </section>
  )
}

export default skills
