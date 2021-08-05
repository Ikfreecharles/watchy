import { useContext } from "react";

//import css and components
import "./cartDropdown.css";
import { Link } from "react-router-dom";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AppContext from "../../context/app-context";

function CartDropdown() {
   const { cartItem, base_URL, handleCartEvent } = useContext(AppContext);
   //function to handle events in the cart
   const handleCart = (e, option, item) => {
      e.preventDefault();
      handleCartEvent(option, item);
   };
   const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.Price, 0);
   const taxPrice = itemsPrice * 0.14;
   const shippingPrice = itemsPrice > 2000 || cartItem.length === 0 ? 0 : 20;
   const totalPrice = (itemsPrice + taxPrice + shippingPrice).toFixed(2);

   return (
      <div className="cdd-outer-div">
         {cartItem.length > 0 ? (
            cartItem.map((item) => {
               const { Id, Title, Images, Price, qty } = item;

               return (
                  <div key={Id} className="cdd-item-outer">
                     <div className="cdd-item-img">
                        <img src={`${base_URL}${Images[0].image}`} alt={Id} />
                     </div>
                     <div className="cdd-item-name">
                        <p>{Title}</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                           €{Price * qty}
                        </p>
                     </div>
                     <div className="cdd-qty-outer">
                        <div className="cdd-add-remove">
                           <button
                              className="cdd-qty-btn"
                              onClick={(e) => handleCart(e, "add", item)}
                           >
                              <IoIosAdd className="cdd-qty-icon" />
                           </button>
                           <p>{qty}</p>
                           <button
                              className="cdd-qty-btn"
                              onClick={(e) => handleCart(e, "remove", item)}
                           >
                              <IoIosRemove className="cdd-qty-icon" />
                           </button>
                        </div>
                        <MdDelete
                           className="cdd-del"
                           onClick={(e) => handleCart(e, "delete", item)}
                        />
                     </div>
                  </div>
               );
            })
         ) : (
            <h6>Shopping Cart is empty</h6>
         )}

         <div className="cdd-price">
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
            <button className="cdd-checkout-btn">Check out</button>
         </Link>
      </div>
   );
}

export default CartDropdown;
