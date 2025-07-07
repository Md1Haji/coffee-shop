import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaQuoteLeft 
} from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    { 
      name: "Sarah Johnson", 
      image: "phot1.jpeg",
      text: "Absolutely love this place! The baristas are incredibly skilled and the coffee quality is consistently excellent. The atmosphere is perfect for both work and relaxation.",
      rating: 5.0
    },
    { 
      name: "Michael Chen", 
      image: "phto4.jpeg",
      text: "Best coffee in town! I've been coming here for over a year and they never disappoint. The Ethiopian single origin is my absolute favorite.",
      rating: 4.8
    },
    { 
      name: "Emma Rodriguez", 
      image: "phhto3.jpeg",
      text: "The perfect spot for coffee lovers. Great variety, friendly staff, and the ambiance is just right. Their latte art is Instagram-worthy!",
      rating: 4.9
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
    <section className="review" id="review">
      <h1 className="heading">
        What Our <span>Customers Say</span>
      </h1>
      <div className="box-container">
        {reviews.map((review, index) => (
          <div className="box" key={index}>
            <FaQuoteLeft className="quote" />
            <p>{review.text}</p>
            <img src={`/images/${review.image}`} className="user" alt={review.name} />
            <h3>{review.name}</h3>
            <div className="stars">
              {renderStars(review.rating)}
              <span className="rating-text">({review.rating})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;