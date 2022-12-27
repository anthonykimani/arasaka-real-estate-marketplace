import { useNavigate } from "react-router-dom";

const PurchasedProperty = ({
  id,
  img,
  property_name,
  property_description,
  price,
  location,
}) => {

  const navigate = useNavigate();

  const handleDelete = async() => {
    // console.log(id)
    let response = await fetch(`http://localhost:3000/purchases/${id}`,{
      method:"DELETE",
    })
  }

  return (
    <div className="flex flex-col md:flex-row md:max-w-[800px] md:w-[100%] bg-white font-jost text-gray-900 rounded-lg shadow-lg mt-[100px] mx-2">
      <div className="md:max-w-[300px] w-[100%]">
        <img
          src={process.env.PUBLIC_URL + img}
          alt=""
          className="object-cover max-w-[600px] w-[100%] md:max-w-[600px] md:h-[100%] md:max-h-[300px] rounded-t-md md:rounded-l-md md:rounded-t-none"
        />
      </div>
      <div className="md:max-w-[450px] md:w-[100%] flex justify-around py-3">
        <div className="h-[400px] px-2 md:max-w-[400px] md:w-[100%] flex flex-col justify-around">
          <h3 className="font-open font-bold text-gray-700 text-xl">{location}</h3>
          <h1 className="font-jost text-5xl">{property_name}</h1>
          <h3 className="font-open text-gray-600 text-xl">{property_description}</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3><span className="font-extrabold font-work text-2xl">${price}</span>per unit*</h3>
            </div>
            <div>
              <button onClick={handleDelete} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-work ">
                Delete
              </button>
            </div>
          </div>
          <h4>*prices may vary</h4>
        </div>
      </div>
    </div>
  );
};

export default PurchasedProperty;
