import AppInner from "./AppInner";
import AppState from "./context/AppState";

function App() {
   return (
      <>
         <AppState>
            <AppInner />
         </AppState>
      </>
   );
}

export default App;
