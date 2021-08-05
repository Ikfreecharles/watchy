import "./sectionTwo.css";
import { BsBatteryCharging, BsFillCalendarFill } from "react-icons/bs";
import { IoIosWater, IoIosSettings } from "react-icons/io";

function SectionTwo({ dataBase }) {
   const { Title, BasicTD } = dataBase;
   return (
      <section className="container st-outer-div">
         <div className="st-inner-div">
            <h2>{Title}</h2>
            <div className="row st-basic-td">
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-circle">
                        <BsBatteryCharging className="st-icons" />
                        <p>{BasicTD.Battery}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-circle">
                        <BsFillCalendarFill className="st-icons" />
                        <p>{BasicTD.Calender}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-circle">
                        <IoIosWater className="st-icons" />
                        <p>{BasicTD.Waterproof}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-3 col-xs-6 ">
                  <div className="st-circle">
                     <div className="st-inner-circle">
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
