import React, {useState} from "react";

function ListingCard({ listing, onDeleteListing}) {

  const [favorite, setFavorite] = useState(false)
  const {id, image, description, location } = listing
  
  function handleClick(){
    setFavorite(!favorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
  })
    .then(res => res.json())
    .then(() => {
      onDeleteListing(id)
    })
  }
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
