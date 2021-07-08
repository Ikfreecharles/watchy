import { useState, useEffect } from "react";
import "./product.css";
import data from "../database/database.json";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

function Product({ match, handleCartEvent, cartItems }) {
   const { id } = match.params;
   const [dataBase, setdataBase] = useState(
      data.find((item) => item.id === id)
   );

   useEffect(() => {
      setdataBase(data.find((item) => item.id === id));
   }, [id]);

   return (
      <>
         <SectionOne
            dataBase={dataBase}
            match={match}
            handleCartEvent={handleCartEvent}
            cartItems={cartItems}
         />
         <SectionTwo dataBase={dataBase} />
         <SectionThree dataBase={dataBase} />
      </>
   );
}

export default Product;
