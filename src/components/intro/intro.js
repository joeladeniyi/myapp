import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/FMRGB.png'
import contact from '../../assets/envelope.png'


const intro = () => {
  return (
    <section id='intro'>
      <div className='introcontent'>
        <span className='hello font-mono'> Hello, </span>
        <span className='introtext font-mono'>I'm <span className='introname'> Oluwafemi </span><br/> Website Developer</span>
        <p className='intropara font-mono'> I'm a skilled web developer with experience in creating <br/> visually appealing and user friendly website</p>
        {/* <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className='link'><button className='btn'> <img src={contact} alt='' className='btnimg'/> Hire me</button> </Link> */}
      
      </div>
      <img src={bg} alt='profile pics' className='bg'/>
    </section>
  )
}

export default intro
