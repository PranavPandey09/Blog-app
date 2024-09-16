// import React, { useRef } from 'react';
// import './Contact.css';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_rm4i6nu', 'template_tz3pebj', form.current, 'X1LdRP9_FVUgve4Qb')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send message. Please try again.');
//       });

//     // Clear the form after submission
//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-left">
//         <h1>Let's Talk with Me</h1>
//         <p>I am available for freelance work and other collaboration opportunities. Feel free to reach out to me for more information!</p>
//         <div className="contact-details">
//           <div className="contact-item">
//             <i className="email-icon">📧</i> contact@gmail.com
//           </div>
//           <div className="contact-item">
//             <i className="phone-icon">📞</i> 135225377327
//           </div>
//           <div className="social-media-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </div>
//         </div>
//       </div>

//       <div className="contact-right">
//         <h2>Contact Me</h2>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name="user_name" placeholder="Name" required />
//           <input type="email" name="user_email" placeholder="Email" required />
//           <input type="text" name="subject" placeholder="Subject" required />
//           <textarea name="message" placeholder="Message" required></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useRef } from 'react';
// import './Contact.css';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_rm4i6nu', 'template_tz3pebj', form.current, 'X1LdRP9_FVUgve4Qb')
//       .then((result) => {
//         console.log(result.text);
//         alert('Message sent successfully!');
//       }, (error) => {
//         console.log(error.text);
//         alert('Failed to send message. Please try again.');
//       });

//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-left">
//         <h1>Let's Talk with Me</h1>
//         <p>I am available for freelance work and other collaboration opportunities. Feel free to reach out to me for more information!</p>
//         <div className="contact-details">
//           <div className="contact-item">
//             <i className="email-icon">📧</i> contact@gmail.com
//           </div>
//           <div className="contact-item">
//             <i className="phone-icon">📞</i> 135225377327
//           </div>
//           <div className="social-media-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </div>
//         </div>
//       </div>

//       <div className="contact-right">
//         <div className="contact-form-container">
//           <h2>Contact Me</h2>
//           <form ref={form} onSubmit={sendEmail}>
//             <input type="text" name="name" placeholder="Name" required />
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="text" name="subject" placeholder="Subject" required />
//             <textarea name="message" placeholder="Message" required></textarea>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rm4i6nu', 'template_tz3pebj', form.current, 'X1LdRP9_FVUgve4Qb')
      .then((result) => {
        console.log(result.text);
        setMessage('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setMessage('Failed to send message. Please try again.');
      });

    e.target.reset(); // Clear the form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <h1>Let's Talk with Me</h1>
        <p>I am available for freelance work and other collaboration opportunities. Feel free to reach out to me for more information!</p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="email-icon">📧</i> contact@gmail.com
          </div>
          <div className="contact-item">
            <i className="phone-icon">📞</i> 135225377327
          </div>
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
            {message && <p className="success-message">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

