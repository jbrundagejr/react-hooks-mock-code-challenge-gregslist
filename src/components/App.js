import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [searchedListing, setSearchedListing] = useState("")
  function handleSearchChange(userTypedSearch){
    setSearchedListing(userTypedSearch)
  }

  return (
    <div className="app">
      <Header 
      handleSearchChange={handleSearchChange}
      />
      <ListingsContainer
      searchedListing={searchedListing}
      />
    </div>
  );
}

export default App;
