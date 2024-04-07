import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import "./itemCalling_TableWise.css";

const Foodies = (props) => {
  const selectedCategory = props.value;
  const [countItem, setCountItem] = useState(new Array(data.length).fill(0));
  const [sortedData,setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);


  const handleSort = () => {

    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedData = data.slice().sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return newSortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setSortedData(sortedData);
  };

  const handleReduceItem = (index) => {
    const newCounts = [...countItem];
    newCounts[index] = Math.max(0, newCounts[index] - 1);
    setCountItem(newCounts);
  };
  const handleIncreaseItem = (index) => {
    const newCounts = [...countItem];
    newCounts[index] = newCounts[index] + 1;
    setCountItem(newCounts);
  };
  

  return (
    <>
      <div className="row">
        <table id="ItemCalling">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Item name</th>
              <th>Image</th>
              <th>Description</th>
              <th>
                <a href="#" onClick={handleSort}>
                  Price {sortOrder && (sortOrder === "asc" ? "▲" : "▼")}
                </a>
              </th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedData
              .map(
                (items, index) =>
                  (selectedCategory === null ||
                    items.type === selectedCategory) && (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.name}</td>
                      <td>
                        <img src={items.image} alt="" />
                      </td>
                      <td>{items.text}</td>
                      <td>{items.price}</td>
                      <td>
                        <button onClick={() => handleReduceItem(index)}>-
                        </button>
                        <button onClick={() => handleIncreaseItem(index)}>+
                        </button>
                        <br />
                        Item count = {countItem[index]}
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Foodies;
