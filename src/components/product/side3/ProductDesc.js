import { useContext } from "react";
//import css and components
import "./productDesc.css";
import { BsPlus } from "react-icons/bs";
import AppContext from "../../../context/app-context";

function ProductDesc({ dataBaseItem }) {
   const { handleCartEvent, cartItem } = useContext(AppContext);
   const { Model, Collection, Price, Description } = dataBaseItem;

   //function to handle add to cart
   const handleClickCart = (e, option, item) => {
      e.preventDefault();
      //send items to to app.js
      handleCartEvent(option, item);
   };

   return (
      <article className="pd-outer-div">
         <div className="pd-model">
            <p>
               Model: <span>For {Model}</span>
            </p>
            <p>
               Collection: <span>{Collection}</span>
            </p>
         </div>
         <p className="price">€{Price}</p>
         <p className="description">{Description}</p>

         <button
            onClick={(e) => handleClickCart(e, "add", dataBaseItem)}
            style={{
               pointerEvents:
                  cartItem.map((item) => item.Id).includes(dataBaseItem.Id) &&
                  "none",
            }}
         >
            <p>
               {cartItem.map((item) => item.Id).includes(dataBaseItem.Id)
                  ? "Item added"
                  : "Add to Cart"}
            </p>
            <div className="pd-cart-add">
               <BsPlus />
            </div>
         </button>
      </article>
   );
}

export default ProductDesc;
