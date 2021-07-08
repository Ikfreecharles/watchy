import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import other components
import Nav from "./components/nav/Nav";
import Product from "./components/product/Product";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
const base_URL = "/images/";

function App() {
   const [numberOfItems, setnumberOfItems] = useState(0);
   const [cartItem, setcartItem] = useState([]);
   const [hovered, sethovered] = useState(false);

   //function to handle cart and qty of items
   const handleCartEvent = (option, dbItem) => {
      //click on plus to increase item by 1
      if (option === "add") {
         const exist = cartItem.find((item) => item.id === dbItem.id);
         if (exist) {
            setcartItem(
               cartItem.map((item) =>
                  item.id === dbItem.id
                     ? { ...exist, qty: exist.qty + 1 }
                     : item
               )
            );
            //increase number of items in cart
            setnumberOfItems((numberOfItems) => (numberOfItems += 1));
         } else {
            setcartItem([...cartItem, { ...dbItem, qty: 1 }]);
            //increase number of items in cart
            setnumberOfItems((numberOfItems) => (numberOfItems += 1));
         }
      }
      //click on minus to decrease item by 1
      if (option === "remove") {
         const exist = cartItem.find((item) => item.id === dbItem.id);
         if (exist.qty === 1) {
            setcartItem(cartItem.filter((item) => item.id !== dbItem.id));
            setnumberOfItems((numberOfItems) => (numberOfItems -= 1));
         } else {
            setcartItem(
               cartItem.map((item) =>
                  item.id === dbItem.id
                     ? { ...exist, qty: exist.qty - 1 }
                     : item
               )
            );
            setnumberOfItems((numberOfItems) => (numberOfItems -= 1));
         }
      }
      //click on delete to remove all occurences of item
      if (option === "delete") {
         const exist = cartItem.find((item) => item.id === dbItem.id);
         var index = cartItem.indexOf(exist);
         if (index > -1) {
            cartItem.splice(index, 1);
            setnumberOfItems((numberOfItems) => (numberOfItems -= exist.qty));
         }
      }
   };

   //console.log(cartItemsId);
   //console.log(cartItem);
   return (
      <section>
         <BrowserRouter>
            <Nav
               numberOfItems={numberOfItems}
               cartItem={cartItem}
               base_URL={base_URL}
               handleCartEvent={handleCartEvent}
            />
            <Switch>
               <Route path="/" component={Home} exact />
               <Route
                  path="/products/:id"
                  render={(match) => (
                     <Product
                        handleCartEvent={handleCartEvent}
                        cartItems={cartItem}
                        match={match.match}
                     />
                  )}
                  exact
               />
               <Route
                  path="/products/checkout/cart"
                  render={() => (
                     <Cart
                        cartItem={cartItem}
                        base_URL={base_URL}
                        handleCartEvent={handleCartEvent}
                     />
                  )}
               ></Route>
            </Switch>
         </BrowserRouter>
      </section>
   );
}

export default App;
