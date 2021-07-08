import "./sectionTwo.css";
import { BsBatteryCharging, BsFillCalendarFill } from "react-icons/bs";
import { IoIosWater, IoIosSettings } from "react-icons/io";

function SectionTwo({ dataBase }) {
   const { Tagline, BasicTD } = dataBase;
   return (
      <section className="container st-outer-div">
         <div className="st-inner-div">
            <h2>{Tagline}</h2>
            <div className="row st-basic-td">
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-cirlce">
                        <BsBatteryCharging className="st-icons" />
                        <p>{BasicTD.Battery}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-cirlce">
                        <BsFillCalendarFill className="st-icons" />
                        <p>{BasicTD.Calender}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-cirlce">
                        <IoIosWater className="st-icons" />
                        <p>{BasicTD.Waterproof}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-cirlce">
                        <IoIosSettings className="st-icons" />
                        <p>{BasicTD.ProductionOrigin}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default SectionTwo;
