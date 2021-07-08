import React from "react";
import CollectionDesc from "./side1/CollectionDesc";
import ProductImg from "./side2/ProductImg";
import ProductDesc from "./side3/ProductDesc";
const base_URL = "/images/";

function SectionOne({ dataBase, match, handleCartEvent, cartItems }) {
   const { Images } = dataBase;

   return (
      <section className="container p-outer-div">
         <div className="row p-inner-div">
            <div className="col-md-4 cd-div">
               <CollectionDesc dataBase={dataBase} />
            </div>
            <div className="col-md-4 pi-div">
               <ProductImg images={Images} base_URL={base_URL} />
            </div>
            <div className="col-md-4 pd-div">
               <ProductDesc
                  dataBaseItem={dataBase}
                  match={match}
                  handleCartEvent={handleCartEvent}
                  cartItems={cartItems}
               />
               ;
            </div>
         </div>
      </section>
   );
}

export default SectionOne;
