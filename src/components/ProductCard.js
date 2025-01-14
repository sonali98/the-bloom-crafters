const ProductCard = ({ image, title, description, price }) => (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>₹{price}</p>
    </div>
  );
  
export default ProductCard;
  