import "./sectionThree.css";

function SectionThree({ dataBase }) {
   const { TechnicalDetails } = dataBase;
   const keys = Object.keys(TechnicalDetails);

   return (
      <section className="sth-outer-div">
         <div className="sth-outer-container">
            <h3>Technical Details</h3>

            <div className="sth-inner-div">
               {keys.map((key, index) => {
                  return (
                     <div key={index} className="sth-content">
                        <h5>{key}</h5>
                        {/* The logic checks Technical details is an array, string or object */}
                        {Array.isArray(TechnicalDetails[key]) ? (
                           <ul>
                              {TechnicalDetails[key].map((item, index) => (
                                 <li key={index}>{item}</li>
                              ))}
                           </ul>
                        ) : typeof TechnicalDetails[key] === "string" ? (
                           <p>{TechnicalDetails[key]}</p>
                        ) : (
                           Object.entries(TechnicalDetails[key]).map(
                              ([key, value, index]) => {
                                 return <p key={index}>{`${key}: ${value}`}</p>;
                              }
                           )
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export default SectionThree;
