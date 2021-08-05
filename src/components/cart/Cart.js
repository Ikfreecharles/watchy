import { useContext } from "react";

//import css and components
import "./cart.css";
import "./cartMediaquery.css";
import CartItemList from "./CartItemList";
import TotalCost from "./TotalCost";
import AppContext from "../../context/app-context";

function Cart() {
   const { cartItem } = useContext(AppContext);
   console.log(cartItem);

   return (
      <div className="container">
         <h2>Checkout</h2>
         <section className="cart-container">
            <CartItemList cartItem={cartItem} />
            <TotalCost cartItem={cartItem} />
         </section>
      </div>
   );
}

export default Cart;
