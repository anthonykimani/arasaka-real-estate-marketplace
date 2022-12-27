import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DisplayPropertyCard from "../components/DisplayPropertyCard";
import FilterProperty from "../components/FilterProperty";
import { FilterContext } from "../contexts/FilterContext";
import MobileNav from "../components/MobileNav";

const Property = () => {

  //initial state for properties
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  //fetching properties
  useEffect(() => {
    const getProperties = async () => {
      let response = await fetch("https://arasaka.onrender.com/properties");
      response = await response.json();
      // await console.log(response);
      setProperties(response);
      setFilteredProperties(response);
      //   const data = await console.log(data);
    };
    getProperties();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-indigo-50 h-100%">
      <Navbar />
      <FilterContext.Provider
        value={{
          properties,
          setProperties,
          filteredProperties,
          setFilteredProperties,
        }}
      >
        <FilterProperty />
      </FilterContext.Provider>
      <div className="mt-[30px] mx-2 max-w-[1100px] w-[100%] flex items-center flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProperties.map((property) => (
          <DisplayPropertyCard
            id={property.id}
            img={property.image}
            property_name={property.property_name}
            price={property.price}
            location={property.location}
          />
        ))}
      </div>
      <MobileNav />
    </div>
  );
};

export default Property;
