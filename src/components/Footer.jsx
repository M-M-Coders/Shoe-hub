import React, { useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer-container');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      
      const distanceToBottom = documentHeight - (scrollY + windowHeight);

     
      if (distanceToBottom > 0) {
        footer.style.bottom = '0';
      } else {
        footer.style.bottom = '-200px'; 
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer-container">
      <div className="map-container">
        {/* You can embed a map iframe or any other map component here */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-74.005941!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzExLjMiTiA3NMKwMzEnMDAuNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="200"  
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>  
        <p>4rth Street,</p>
        <p>Cityville, ST 12345</p>
        <p>Email: eceeshoes@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="additional-info">
        <h3>Additional Information</h3> 
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
