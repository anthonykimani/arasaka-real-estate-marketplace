import { FilterContext } from "../contexts/FilterContext";
import { useContext } from "react";

const FilterProperty = () => {
    const { properties, setFilteredProperties } = useContext(FilterContext);
    // const {  } = useContext(FilterContext);

    //filter properties by property type
    const handleFilter = (property_type)=>{
        const filteredProperty = properties.filter((property)=>{
            return property.property_type === property_type;
        })
        setFilteredProperties(filteredProperty);
    }

    //set properties to default
    const handleDefault = ()=>{
        setFilteredProperties(properties);
    }
    
    return ( 
        <div className="flex overflow-x-scroll list-none max-w-[1000px] w-[100%] mt-[70px]" id="scroll">
            <button onClick={handleDefault} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">All</button>
            <button onClick={()=>handleFilter("bedsitter")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">bedsitter</button>
            <button onClick={()=>handleFilter("singleroom")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">singleroom</button>
            <button onClick={()=>handleFilter("one_bedroom")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">1 bedroom</button>
            <button onClick={()=>handleFilter("two_bedroom")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">2 bedroom</button>
            <button onClick={()=>handleFilter("doubleroom")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">doubleroom</button>
            <button onClick={()=>handleFilter("apartment")} className="bg-white text-black font-open shadow-lg p-1 mx-1 rounded cursor-pointer hover:bg-black hover:text-white min-w-[150px] max-h-[40px] ">apartment</button>
        </div>
     );
}
 
export default FilterProperty;