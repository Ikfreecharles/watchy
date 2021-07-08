import "./cart.css";
import CartItemList from "./CartItemList";
import TotalCost from "./TotalCost";

function Cart({ cartItem, base_URL, handleCartEvent }) {
   console.log(cartItem);

   return (
      <div className="container">
         <h2>Checkout</h2>
         <section className="cart-container">
            <CartItemList
               cartItem={cartItem}
               base_URL={base_URL}
               handleCartEvent={handleCartEvent}
            />
            <TotalCost cartItem={cartItem} />
         </section>
      </div>
   );
}

export default Cart;
