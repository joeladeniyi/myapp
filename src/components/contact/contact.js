import React, { useRef, useState } from 'react'
import './contact.css'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import X from '../../assets/twitter-alt.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errmsg, setErrmsg] = useState(false)
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();
    if(!name | !email | !message){
     setErrmsg(true)
     }
     if(name&&email&&message){
      setName('')
      setEmail('')
      setMessage('')
      setErrmsg(false)
     }

    emailjs
      .sendForm('service_6y126c8', 'template_wr9164u', form.current, {
        publicKey: 'NIQqVE5Z6Xog8-WJJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactpage'>
      <div id='contact'>
        <h1 className='contactpagetitle font-mono'> Contact Me</h1>
        <span className='contactdesc font-mono'>Please fill out the form below to discuss any work opportunities</span>
       <form className='contactform' ref={form} onSubmit={sendEmail}>
         <input type='text' className='name' placeholder='Your Name ' name='name'
          value={name} onChange={((e)=> setName(e.target.value))} />
         <input type='email' className='email' placeholder='Your Email' name='email' 
         value={email} onChange={((e)=> setEmail(e.target.value))}/>
         <textarea name='message' className='msg' rows='5' placeholder='Your message'
          value={message} onChange={((e)=> setMessage(e.target.value))}></textarea>
         {errmsg && <p id='formerror font-mono'>Kindly complete all fields</p>}
         <button className='submitbtn font-mono' type='submit' value='send' onSubmit={sendEmail}>Submit</button>
       <div className='links'>
        <img src={facebook} alt='' className='link'/>
       <a href='https://www.linkedin.com/in/adeniyi-oluwafemi-bb7060224'> <img src={linkedin} alt='' className='link'/> </a> 
        <img src={X} alt='' className='link'/>
       </div>
       </form>

      </div>

    </section>
  )
}

export default Contact
