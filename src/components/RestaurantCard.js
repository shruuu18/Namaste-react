const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
  const RestaurantCard = ({ resName, cuisine, image, rating, deliveryTime,}) => {
    return (
      <div className="res-card" style={styleCard}>
         <img className="res-img" src={image} alt={resName} />
  
        <h3>{resName}</h3>
        <h5>{cuisine}</h5>
        <h5>{rating} ⭐</h5>
        <h5>{deliveryTime}</h5>
      </div>
    );
  };
 export default RestaurantCard;