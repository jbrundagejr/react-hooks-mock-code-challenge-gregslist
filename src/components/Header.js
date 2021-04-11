import React from "react";
import Search from "./Search";

function Header({handleSearchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      handleSearchChange={handleSearchChange}/>
    </header>
  );
}

export default Header;
