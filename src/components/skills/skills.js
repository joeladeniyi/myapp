import React from 'react'
import './skill.css'

const skills = () => {
  return (
    <section id='skills'>
      <span className='skilltitle'> What i do</span>
      <span className='skilldsc'> I am a skill and passionate web developer with experience in creating visually appealing and user friendly websites. I am proficient in HTLM, CSS, Javascipt react and nextjs. I am familiar with backend technology such as nodejs, express and mongodb </span>
      <div className='skillbars'>
        
        <div className='skillbar'>
         <img src='' alt='' className='skillbarimg'/>
         <div className='skillbartext'>
          <span>Frontend Development</span>
          <span> HTML, CSS JAVASCRIPT, BOOTSTRAP, REACT, NEXTJS </span>
         </div>
        </div>
        <div className='skillbar'>
         <img src='' alt='' className='skillbarimg'/>
         <div className='skillbartext'>
          <h2>Backend Development</h2>
          <span> NODEJS, EXPRESSJS MONGODB  </span>
         </div>
        </div>
        
      </div>

    </section>
  )
}

export default skills
