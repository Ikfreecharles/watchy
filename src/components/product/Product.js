import { useState, useEffect, useContext } from "react";

//import css and components
import "./product.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import AppContext from "../../context/app-context";

function Product({ match }) {
   const { products, dataFound, setdataFound } = useContext(AppContext);
   const { id } = match.params;
   const [dataBase, setdataBase] = useState({});

   useEffect(() => {
      setdataBase(products.find((item) => item.Id === id));
      setdataFound(true);
      return () => {
         setdataFound(false);
      };
   }, [id, products, setdataFound]);

   return (
      <>
         {dataFound ? (
            <>
               <SectionOne dataBase={dataBase} />
               <SectionTwo dataBase={dataBase} />
               <SectionThree dataBase={dataBase} />
            </>
         ) : (
            <h2>Loading...</h2>
         )}
      </>
   );
}

export default Product;
