import { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";

function Nav({
   numberOfItems,
   cartItemsId,
   cartItem,
   base_URL,
   handleCartEvent,
}) {
   const [hovered, sethovered] = useState(false);

   useEffect(() => {
      sethovered(false);
   }, []);

   return (
      <section className="nav-outer-div">
         <article className="nav-outer-div-inner">
            <article className="nav-bar-div">
               <div className="nav-breadcrumb">
                  <p>
                     Watches <span>-----</span> Collections
                  </p>
               </div>
               <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
               >
                  <div className="brand-logo">
                     <p>thompson &#169</p>
                  </div>
               </Link>
               <div className="nav-cart-account">
                  <div className="line"></div>
                  <p>My Account</p>

                  <div
                     className="nav-cart-outer-div"
                     onClick={() => sethovered((hovered) => !hovered)}
                  >
                     <p>My cart </p>
                     <div className="nav-cart-items">
                        <span>{numberOfItems}</span>
                     </div>
                  </div>
               </div>
            </article>
            {hovered && (
               <CartDropdown
                  cartItemsId={cartItemsId}
                  cartItem={cartItem}
                  base_URL={base_URL}
                  handleCartEvent={handleCartEvent}
               />
            )}
         </article>
      </section>
   );
}

export default Nav;
