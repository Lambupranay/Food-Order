import React from "react";
import "./body.css";

import Foodies from "./body/itemCalling.tsx";
// import Foodies from "./body/itemCalling_TableWise.tsx";

const Body = (props) => {
  console.log(props, "hel");
  let value = props.category;
  return (
    <div className="container">
      <>
        <Foodies value={value} searchKeyWord={props.searchKeyWord} />
      </>
    </div>
  );
};

export default Body;
