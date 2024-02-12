import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetails from "./routes/RestaurantDetails";
import UpdateRestaurant from "./routes/UpdatePage";
import {
  RestaurantContextProvider,
} from "./context/RestaurantContext";
function App() {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/restaurants/id" Component={RestaurantDetails}></Route>
            <Route
              path="/restaurants/:id/update"
              Component={UpdateRestaurant}
            ></Route>
          </Routes>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
}

export default App;
