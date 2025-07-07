import {
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
  FaRegStar
} from 'react-icons/fa';



const Products = () => {
  const products = [
    { 
      image: "cofeepac1.jpeg", 
      name: "Ethiopian Single Origin", 
      price: 28.99, 
      originalPrice: 34.99,
      rating: 4.8 
    },
    { 
      image: "cofeepac2.jpeg", 
      name: "Colombian Supreme Blend", 
      price: 32.50, 
      originalPrice: 38.00,
      rating: 4.9 
    },
    { 
      image: "cofeepac3.jpeg", 
      name: "Dark Roast Signature", 
      price: 26.75, 
      originalPrice: 31.25,
      rating: 4.7 
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={i} />);
    }
    return stars;
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Premium <span>Coffee Beans</span>
      </h1>
      <div className="box-container">
        {products.map((product, index) => (
          <div className="box" key={index}>
            <div className="icons">
              <a href="#" className="icon"><FaShoppingCart /></a>
              <a href="#" className="icon"><FaHeart /></a>
              <a href="#" className="icon"><FaEye /></a>
            </div>
            <div className="image">
              <img src={`/images/${product.image}`} alt={product.name} />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="stars">
                {renderStars(product.rating)}
                <span className="rating-text">({product.rating})</span>
              </div>
              <div className="price">
                ${product.price} <span>${product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Products;