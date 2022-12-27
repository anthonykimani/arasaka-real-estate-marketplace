import PropertyCard from "../components/PropertyCard";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

const SelectedProperty = () => {
  const { propertyId } = useContext(AppContext);
  const [selectedProperty, setSelectedProperty] = useState({});

  //fetch individual property
  useEffect(() => {
    const handleGetProperty = async () => {
      console.log(propertyId);
      let response = await fetch(
        `https://arasaka.onrender.com/properties/${propertyId}`
      );
      response = await response.json();
      await console.log(response);
      setSelectedProperty(response);
    };
    handleGetProperty();
  }, []);

  return (
    <div className="flex flex-col items-center justify-around bg-indigo-50">
      <Navbar />
      <div className="md:h-[100%] md:min-h-[800px] ">
        <PropertyCard
          img={selectedProperty.image}
          property_name={selectedProperty.property_name}
          property_description={selectedProperty.property_description}
          price={selectedProperty.price}
          location={selectedProperty.location}
        />
      </div>
      <MobileNav />
    </div>
  );
};

export default SelectedProperty;
