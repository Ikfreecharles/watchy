import { useContext } from "react";

//import css and components
import "./cartItemList.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AppContext from "../../context/app-context";

function CartItemList({ cartItem }) {
   const { base_URL, handleCartEvent } = useContext(AppContext);
   //function to handle events in the cart
   const handleCart = (e, option, item) => {
      e.preventDefault();
      handleCartEvent(option, item);
   };

   return (
      <section>
         {cartItem.length > 0 ? (
            cartItem.map((item) => {
               const { Id, Title, Description, qty, Price, Images } = item;
               return (
                  <div key={Id}>
                     <article className="c-outer-div">
                        <div className="c-img-div">
                           <img
                              src={`${base_URL}${Images[0].image}`}
                              alt={Title}
                           />
                        </div>
                        <div className="c-title-div">
                           <h2>{Title}</h2>
                        </div>
                        <div className="c-qty">
                           <button
                              className="cdd-qty-btn"
                              onClick={(e) => handleCart(e, "remove", item)}
                           >
                              <IoIosRemove className="cdd-qty-icon" />
                           </button>
                           <p>{qty}</p>
                           <button
                              className="cdd-qty-btn"
                              onClick={(e) => handleCart(e, "add", item)}
                           >
                              <IoIosAdd
                                 className="
                                 cdd-qty-icon
                              "
                              />
                           </button>
                        </div>
                        <div className="c-price">
                           <p>€{Price * qty}</p>
                        </div>
                        <div className="c-remove">
                           <button
                              className="cdd-del cdd-qty-btn"
                              onClick={(e) => handleCart(e, "delete", item)}
                           >
                              <MdDelete />
                           </button>
                        </div>
                     </article>
                  </div>
               );
            })
         ) : (
            <h2>Shopping cart is empty</h2>
         )}
      </section>
   );
}

export default CartItemList;
