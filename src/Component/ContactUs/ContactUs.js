import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'
// import Button from '@restart/ui/esm/Button';
// import { ButtonGroup } from 'react-bootstrap';
import { Button} from 'react-bootstrap';


export const ContactUs = () => {
    // const [emaildata, setEmaildata]= useState([])
  const form = useRef();

//   setEmaildata(form.current)
  console.log(form.current)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xcygngc', 'template_o30vwjj', form.current, 'user_7BurpaaCyYIomBWlgwvLt')
      .then((result) => {
          console.log(result.text);
          if (result.text){
              alert('Email Send Successfully')
            //   form.current='';
              
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className='contactfrm'>
      <h2 >Please Give your valuable Feedback </h2>
        <form  ref={form} onSubmit={sendEmail}>
      
      <input  type="text" name="user_name"  placeholder="Name" required="required"  />
      
      <input  type="email" name="user_email" placeholder="Email" required="required" />
      
      <textarea name="message" placeholder="Message"  required="required"  />
      <br />    
      <input className="tex-btn" type="submit" placeholder="Send" />
   
    </form>
  </div>
  );
};