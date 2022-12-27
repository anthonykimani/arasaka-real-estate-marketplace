import { useState, useEffect, useContext } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import PurchasedProperty from "../components/PurchasedProperty";
import { AppContext } from "../contexts/AppContext";

const Purchase = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(AppContext);

  //fetch purchased properties
  useEffect(() => {
    const fetchProperties = async () => {
      let response = await fetch("https://arasaka.onrender.com/purchases");
      response = await response.json();
      await setProperties(response);
    };
    fetchProperties();
  }, []);

  // console.log(properties);

  const filteredProperties = properties.filter((property) => {
    return property.user_id === user.id;
  });

  console.log(filteredProperties);

  return (
    <div className="flex flex-col items-center bg-indigo-50">
      <Navbar />
      {filteredProperties.map((element) => {
        return <PurchasedProperty
          id={element.id}
          img={element.property.image}
          property_name={element.property.property_name}
          property_description={element.property.property_description}
          price={element.property.price}
          location={element.property.location}
        />;
      })}
      <MobileNav />
    </div>
  );
};

export default Purchase;
