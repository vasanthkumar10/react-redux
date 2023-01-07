import "./App.css";
import { Carview } from "./features/car/Carview";
import { Bikeview } from "./features/bike/Bikeview";
import { Userview } from "./features/user/Userview";

function App() {
  return (
    <div className="app">
      <Carview />
      <Bikeview />
      {/* <Userview /> */}
    </div>
  );
}

export default App;
