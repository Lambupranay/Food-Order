import React, { useState } from "react";
import "./header.css";

const Head = (props) => {
  // const [searchKeyWord, setSearchKeyWord] = useState("");
  // console.log(props, "hey");

  const handleSearchEvent = (event) => {
    props.setSearchKeyWord(event.target.value);
    console.log(event.target.value);
  };

  const handleAllevent = (event) => {
    const selectedCategory = event.target.textContent;
    props.setCategory(selectedCategory === "All" ? null : selectedCategory);
  };

  return (
    <>
      <img className="foodtruck" src="foodCart.gif" alt="Foodtruck" />
      <header className="Header">Pranay Eats</header>
      <br />
      <div>
        <table className="table-container">
          <thead>
            <tr>
              <td className="head" onClick={handleAllevent}>
                All
              </td>
              <td className="head" onClick={handleAllevent}>
                Breakfast
              </td>
              <td className="head" onClick={handleAllevent}>
                Lunch
              </td>
              <td className="head" onClick={handleAllevent}>
                Dinner
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <input
        type="search"
        id="searchItem"
        name="searchItem"
        placeholder="Search Item"
        value={props.searchKeyWord}
        onChange={handleSearchEvent}
      ></input>
      <br />
      <hr />
    </>
  );
};
export default Head;
