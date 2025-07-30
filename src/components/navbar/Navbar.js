import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import home from '../../assets/home.png'
import contact from '../../assets/envelope.png'
import menu from '../../assets/menu-burger (1).png'
const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={home} alt='img Logo' className='home'/>
         <div className='desktopmenu'>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem' >Home</Link>
      
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenulistitem' >About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenulistitem' >Portfolio</Link>
         </div>
         <button className='desktopmenubtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behaviour :'smooth'});
         }}>
            <img src={contact} alt='' className='desktopmenuimg'/> Contact Me
         </button>
         <img src={menu} alt='menu' className='mobmenu'onClick={()=>setShowmenu(!showmenu)}/>
         <div className='navmenu' style={{display: showmenu? 'flex' :'none'}}>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=>setShowmenu(false)} >Home</Link>
      
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setShowmenu(false)} >About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
         </div>
    </nav>
  )
}

export default Navbar
