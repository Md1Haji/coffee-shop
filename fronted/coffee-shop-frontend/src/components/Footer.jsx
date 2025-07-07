import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest


} from 'react-icons/fa';
const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaPinterest /></a>
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blog</a>
      </div>
      <div className="credit">
        © 2024 Café Aroma. All rights reserved | Crafted with <span>❤</span> for coffee lovers
      </div>
    </section>
  );
};

export default Footer;