import {React, useState} from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Get in</span> Touch
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865401048!2d77.49085262352496!3d12.953959987105064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680775646503!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>

        <form onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <div className="inputbox">
            <span><FaUser /></span>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="inputbox">
            <span><FaEnvelope /></span>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="inputbox">
            <span><FaPhone /></span>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;