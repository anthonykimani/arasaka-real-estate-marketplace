const HeroSection = () => {
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/wall.jpg"}
          alt=""
          className="absolute top-0 z-0 brightness-50 h-[650px] object-cover w-screen"
        />
      </div>
      <div className="relative top-56 z-10 flex justify-around items-center">
        <h1 className="w-[400px] text-3xl text-white font-work font-semibold text-center sm:text-6xl sm:w-[700px]">
          Property Buying and Selling made Easy
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
