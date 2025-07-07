import { useContext, useEffect, useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from './Authentication';

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Espresso Blend", price: 24.99, image: "beans1.jpg" },
    { id: 2, name: "Organic Colombian", price: 32.50, image: "bean2.jpg" },
    { id: 3, name: "Dark Roast Supreme", price: 28.75, image: "bean3.jpg" }
  ]);

  const { user, logout, isAuthenticated } = useContext(AuthContext);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setSearchActive(false);
    setCartActive(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    setNavbarActive(false);
    setCartActive(false);
  };

  const toggleCart = () => {
    setCartActive(!cartActive);
    setNavbarActive(false);
    setSearchActive(false);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarActive(false);
      setSearchActive(false);
      setCartActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images/logo3.png" alt="Café Aroma Logo" />
      </a>

      <nav className={`navbar ${navbarActive ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blog</a>
      </nav>

      <div className="icons">
        <FaSearch onClick={toggleSearch} />
        <FaShoppingCart onClick={toggleCart} />
        <span className="cart-count">{cartItems.length}</span>
        <FaBars onClick={toggleNavbar} id="menu-btn" />
      </div>

      {isAuthenticated && user && (
        <div className="user-info">
          <img src={user.avatar} alt="Avatar" className="user-avatar" />
          <span className="user-name">{user.name}</span>
          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}

      <div className={`search-form ${searchActive ? "active" : ""}`}>
        <input type="search" placeholder="Search for coffee, products..." />
        <label><FaSearch /></label>
      </div>

      <div className={`cart-items-container ${cartActive ? "active" : ""}`}>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <FaTimes className="fa-times" onClick={() => removeFromCart(item.id)} />
            <img src={`images/${item.image}`} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">${item.price}</div>
            </div>
          </div>
        ))}
        <a href="#" className="btn">Checkout Now</a>
      </div>
    </header>
  );
};

export default Header;
