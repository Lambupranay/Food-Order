import React, { useEffect, useState } from "react";
import Head from "./header.tsx";
import Body from "./body.tsx";

const FoodOrder = () => {
  const [category, setCategory] = useState(null);

  const [searchKeyWord, setSearchKeyWord] = useState("");

  return (
    <>
      {
        <div>
          <Head
            setCategory={setCategory}
            setSearchKeyWord={setSearchKeyWord}
            searchKeyWord={searchKeyWord}
          />
          <Body category={category} searchKeyWord={searchKeyWord} />
        </div>
      }
    </>
  );
};

export default FoodOrder;
