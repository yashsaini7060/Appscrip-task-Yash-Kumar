import React from 'react';
import './ProductCard.css';

// Helper function to truncate the title
const truncateTitle = (title, charLimit) => {
  if (title.length > charLimit) {
    return title.slice(0, charLimit) + '...';
  }
  return title;
};

const ProductCard = ({ product }) => {
  const truncatedTitle = truncateTitle(product.title, 15); // Set character limit to 50

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className='product-heading'>
        <h3>{truncatedTitle}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.517 17.3423C10.2337 17.4423 9.76699 17.4423 9.48366 17.3423C7.06699 16.5173 1.66699 13.0757 1.66699 7.24232C1.66699 4.66732 3.74199 2.58398 6.30033 2.58398C7.81699 2.58398 9.15866 3.31732 10.0003 4.45065C10.842 3.31732 12.192 2.58398 13.7003 2.58398C16.2587 2.58398 18.3337 4.66732 18.3337 7.24232C18.3337 13.0757 12.9337 16.5173 10.517 17.3423Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
