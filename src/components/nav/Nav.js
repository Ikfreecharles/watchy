import { useState, useEffect, useContext } from "react";

//import css and components
import "./nav.css";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import AppContext from "../../context/app-context";

function Nav() {
   const { numberOfItems } = useContext(AppContext);
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
            {hovered && <CartDropdown />}
         </article>
      </section>
   );
}

export default Nav;
