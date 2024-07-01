import React ,{useRef}from 'react';
import './Contact.css';
import walmart from '../../assets/img/Walmart.png';
import flipkart from '../../assets/img/Flipkarts.png';
import yt from '../../assets/img/yt.png';
import linkedin from '../../assets/img/Linkedin.png';
import linkedine from '../../assets/img/intsa.svg';
import insta from '../../assets/img/linkldin.svg';
import facebook from '../../assets/img/facebook.svg';
import emailjs from  '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xxu2glu', 'template_ybswpoi', form.current, {
            publicKey: 'V3jARxaN3KZbWGLSH',
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
        <section id='Contactpage'>
            <div id='Clients'>
            <div className="container-center">
                <h1 className='Contactpagetitle'>My Clients</h1>
                <p className='Clientdesc'>
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked witn includes
                </p>
                </div>
                <div className='ClientImg'>
                    <img src={walmart} alt='Client' className='ClientImgs'/>
                    <img src={flipkart} alt='Client' className='ClientImgs'/>
                    <img src={yt} alt='Client' className='ClientImgs'/>
                    <img src={linkedin} alt='Client' className='ClientImgs'/>

                </div>


            </div>
            <div id='contact'>
                <div className='Container-center'>
                <h1 className='contactpagetitle'>Contact me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work to discuss any work opportunities. </span>
                </div>
                <form className='contactform' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email'name='your_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='img-container'>
                    <img src={linkedine} alt='linkedine' className='link'/>
                    <img src={insta} alt='insta' className='link'/>
                    <img src={facebook} alt='facebook' className='link'/>
                    </div>
                    

                </form>

            </div>



        </section>
    );
};

export default Contact;
