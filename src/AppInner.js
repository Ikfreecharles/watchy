import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import other components
import Nav from "./components/nav/Nav";
import Product from "./components/product/Product";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

function AppInner() {
   return (
      <section>
         <Router>
            <Nav />
            <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/products/:id" component={Product} exact />
               <Route path="/products/checkout/cart" component={Cart} exact />
            </Switch>
         </Router>
      </section>
   );
}

export default AppInner;
