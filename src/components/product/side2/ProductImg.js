import "./productImg.css";
import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ProductImg({ images, base_URL }) {
   let [distance, setdistance] = useState(0);
   const [number, setnumber] = useState(0);
   const itemRef = useRef();

   const handleClick = (direction) => {
      if (direction === "left" && number < images.length - 1) {
         setnumber((number) => (number += 1));
         setdistance((distance -= 100));
         itemRef.current.style.transform = `translateX(${distance}%)`;
      }
      if (direction === "right" && distance < 0) {
         setdistance((distance += 100));
         itemRef.current.style.transform = `translateX(${distance}%)`;
         setnumber((number) => (number -= 1));
      }
   };
   //console.log(distance);
   return (
      <article className="pi-outer-div">
         <div className="pi-img-div" ref={itemRef}>
            {images.map((item) => {
               const { id, image } = item;
               return (
                  <div className="p-img-inner-div" key={id}>
                     <img
                        className="p-img"
                        src={`${base_URL}${image}`}
                        alt={image}
                     />
                  </div>
               );
            })}
         </div>
         <button
            className="scroll-button left"
            onClick={() => handleClick("left")}
         >
            <IoIosArrowBack />
         </button>
         <button
            className="scroll-button right"
            onClick={() => handleClick("right")}
         >
            <IoIosArrowForward />
         </button>
      </article>
   );
}

export default ProductImg;
