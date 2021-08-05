import { useContext } from "react";
import { Link } from "react-router-dom";

//import css and components
import "./home.css";
import AppContext from "../../context/app-context";

function Home() {
   const { products } = useContext(AppContext);
   return (
      <section className="container">
         <div className="h-title">
            <h1>Welcome to Thompson watches</h1>
            <h6>Home of classic watches for men and women</h6>
         </div>
         <div className="h-product-cards">
            <div className="row g-5">
               {products.map((item) => {
                  const { Id, Title, Images, Price } = item;
                  return (
                     <div key={Id} className="col-md-3">
                        <Link
                           to={`/products/${Id}`}
                           style={{
                              color: "inherit",
                              textDecoration: "none",
                           }}
                        >
                           <div className="h-product-card">
                              <div className="h-product-img">
                                 <img src={Images[0].image} alt={Title} />
                              </div>
                              <div className="h-product-description">
                                 <p className="h-product-name">{Title}</p>

                                 <div className="h-product-metadata">
                                    <p className="h-price">€{Price}</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}{" "}
            </div>
         </div>
      </section>

      /* <section className="container">
         <div className="h-title">
            <h1>Welcome to Thompson watches</h1>
            <h6>Home of classic watches for men and women</h6>
         </div>
         <div className="h-product-cards">
            <div className="row g-5">
               {data.map((item) => {
                  const { id, Title, Description, Images, Price, Model } = item;
                  return (
                     <div key={id} className="col-md-3">
                        <Link
                           to={`/products/${id}`}
                           style={{
                              color: "inherit",
                              textDecoration: "none",
                           }}
                        >
                           <div className="h-product-card">
                              <div className="h-product-img">
                                 {Images.map((item) => {
                                    const { id, image } = item;
                                    return (
                                       <img
                                          key={id}
                                          src={`${base_URL}${image}`}
                                          alt={image}
                                       />
                                    );
                                 })}
                              </div>
                              <div className="h-product-description">
                                 <p className="h-product-name">{Title}</p>
                                 <p className="h-product-desc">
                                    {`${Description.substring(0)}`}
                                 </p>
                                 <div className="h-product-metadata">
                                    <p className="h-price">€{Price}</p>
                                    <p className="p-model">{Model}</p>
                                    <div className="h-color-div-outer">
                                       {handleColor(
                                          Images.map((item) => item.color)
                                       ).map((colors, index) => {
                                          return (
                                             <div
                                                key={index}
                                                className="color-div"
                                                style={{
                                                   backgroundColor: colors,
                                                }}
                                             ></div>
                                          );
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}{" "}
            </div>
         </div>
      </section> */
   );
}

export default Home;
