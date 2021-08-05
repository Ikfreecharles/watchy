import "./totalCost.css";
import { Link } from "react-router-dom";

function TotalCost({ cartItem }) {
   const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.Price, 0);
   const taxPrice = itemsPrice * 0.14;
   const shippingPrice = itemsPrice > 2000 || cartItem.length === 0 ? 0 : 20;
   const totalPrice = (itemsPrice + taxPrice + shippingPrice).toFixed(2);

   return (
      <section className="tc-outer-div">
         <div className="cdd-total-price">
            <p>Total Price: </p>
            <p className="cdd-cost">€{itemsPrice.toFixed(2)}</p>
         </div>
         <div className="cdd-delivery-price">
            <p>Delivery Price:</p>
            <p className="cdd-cost">€{shippingPrice.toFixed(2)}</p>
         </div>
         <div className="cdd-delivery-price">
            <p>Tax:</p>
            <p className="cdd-cost">€{taxPrice.toFixed(2)}</p>
         </div>
         <div className="cdd-total-cost">
            <p>Total cost:</p>
            <p className="cdd-cost">€{totalPrice}</p>
         </div>
         <Link
            to="/products/checkout/cart"
            style={{
               color: "inherit",
               textDecoration: "none",
               pointerEvents: cartItem.length <= 0 && "none",
            }}
         >
            <button className="cdd-checkout-btn">Make payment</button>
         </Link>
      </section>
   );
}

export default TotalCost;
