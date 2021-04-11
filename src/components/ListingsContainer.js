import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchedListing}) {
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then((listings) => {
      setListings(listings)
    })
  }, [])

  function onDeleteListing(id) {
    const updatedListingArr = listings.filter(listing =>
      listing.id !== id)
      setListings(updatedListingArr)
  }

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchedListing.toLowerCase())
  }) 

  const listingArr = filteredListings.map((listingObj) => 
    <ListingCard 
      key={listingObj.id}
      listing={listingObj}
      onDeleteListing={onDeleteListing}
      />
  )
  return (
    <main>
      <ul className="cards">
        {listingArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
