import { Link } from "react-router-dom";
import "./cartDropdown.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function CartDropdown({ cartItem, base_URL, handleCartEvent }) {
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
               const { id, Title, Images, Price, qty } = item;

               return (
                  <div key={id} className="cdd-item-outer">
                     <div className="cdd-item-img">
                        <img
                           src={`${base_URL}${Images[0].image}`}
                           alt={Title}
                        />
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
               <p className="cdd-cost">€{itemsPrice}</p>
            </div>
            <div className="cdd-delivery-price">
               <p>Delivery Price:</p>
               <p className="cdd-cost">€{shippingPrice}</p>
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
