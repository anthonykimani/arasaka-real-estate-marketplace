// import logo from '../logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Property from "../pages/Property";
import Purchase from "../pages/Purchase";
import { AppContext } from "../contexts/AppContext";
import SelectedProperty from "../pages/SelectedProperty";
import PropertyCart from "../pages/PropertyCart";

function App() {
  const [user, setUser] = useState("Friend");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [propertyId, setPropertyId] = useState(1);
  const [ changedState, setChangeState ] = useState(false)



  return (
    <div className="App">
      <AppContext.Provider
        value={{
          user,
          setUser,
          isLoggedIn,
          setIsLoggedIn,
          propertyId,
          setPropertyId,
          disabled,
          setDisabled,
          changedState,
          setChangeState
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/selected" element={<SelectedProperty />} />
            <Route path="/cart" element={<PropertyCart />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
