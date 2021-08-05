import { useState } from "react";
import AppContext from "./app-context";
import data from "../components/database/data.json";

function AppState(props) {
   const [products, setproducts] = useState(data);
   const [cartItem, setcartItem] = useState([]);
   const [numberOfItems, setnumberOfItems] = useState(0);
   const [dataFound, setdataFound] = useState(false);
   const base_URL = "/images/";

   //function to handle cart and qty of items
   const handleCartEvent = (option, dbItem) => {
      //click on plus to increase item by 1
      if (option === "add") {
         const exist = cartItem.find((item) => item.Id === dbItem.Id);
         if (exist) {
            setcartItem(
               cartItem.map((item) =>
                  item.Id === dbItem.Id
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
         const exist = cartItem.find((item) => item.Id === dbItem.Id);
         if (exist.qty === 1) {
            setcartItem(cartItem.filter((item) => item.Id !== dbItem.Id));
            setnumberOfItems((numberOfItems) => (numberOfItems -= 1));
         } else {
            setcartItem(
               cartItem.map((item) =>
                  item.Id === dbItem.Id
                     ? { ...exist, qty: exist.qty - 1 }
                     : item
               )
            );
            setnumberOfItems((numberOfItems) => (numberOfItems -= 1));
         }
      }
      //click on delete to remove all occurences of item
      if (option === "delete") {
         const exist = cartItem.find((item) => item.Id === dbItem.Id);
         var index = cartItem.indexOf(exist);
         if (index > -1) {
            cartItem.splice(index, 1);
            setnumberOfItems((numberOfItems) => (numberOfItems -= exist.qty));
         }
      }
   };

   return (
      <AppContext.Provider
         value={{
            products,
            numberOfItems,
            base_URL,
            cartItem,
            dataFound,
            setdataFound,
            handleCartEvent,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
}

export default AppState;
