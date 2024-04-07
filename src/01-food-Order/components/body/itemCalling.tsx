import React, { useState } from "react";
import data from "../../../data.json";
import "./itemcalling.css";


const Foodies = (props) => {
  const selectedCategory = props.value;
  const [countItem,setCountItem] = useState(new Array(data.length).fill(0));

  const [countTotal,setCountTotal] = useState([]);

  const handleReduceItem = (index) => {
    const newCounts = [...countItem];
    newCounts[index] = Math.max(0, newCounts[index] - 1);
    setCountItem(newCounts);
  };
  const handleIncreaseItem = (index) => {
  const newCounts = [ ...countItem];
  newCounts[index] = newCounts[index]+1
  setCountItem(newCounts);
  };

  // const handleTotalCount = (itemPrice)=>{
  //   const newTotals = [...countTotal];
  //   newTotals[itemPrice] = newTotals[itemPrice] + itemPrice
  //   setCountTotal(newTotals)
  // }
  return (
    <>
      <div className="row">
        {data
          .filter(
            (item) =>
            item.name.toLowerCase().includes(props.searchKeyWord.toLowerCase())
          )
          .map(
            (items, index) =>
              (selectedCategory === null ||
                items.type === selectedCategory) && (
                <div className="el">
                  <img src={items.image} alt="{items.name}" />
                  <div className="item">
                    <p>{items.name.toUpperCase()}</p>
                    <br />
                    {items.text}
                    <div className="count-price">
                      <div className="item-change"> Items:{countItem[index]} Total: 
                      {/* {countTotal.push(countItem[index]*items.price)} */}
                      {
                      countItem[index]*items.price
                      // countTotal.reduce((val,total)=> val+total,0)
                      } </div>
                      <div className="item-price">
                        <div>
                          <button onClick={() => handleReduceItem(index)}>-</button>
                          <button onClick={() =>handleIncreaseItem(index)}>+</button>
                        </div>
                        <div>
                          <button className="value">Rs.{items.price}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </>
  );
  
};
export default Foodies;
