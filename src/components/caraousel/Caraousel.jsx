import React from "react";
import { useNavigate } from "react-router-dom";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Carousel } from 'flowbite-react';
const Caraousel=()=>{
  const navigate=useNavigate();
  const jwt=localStorage.getItem("jwt");
  const handleClick=()=>{
    if(jwt==null){
      navigate("/login");
    }
    else navigate("/verification");
  }
  return (
    <div className="mt-16 mb-12">
      <div className="h-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="h-96">
      <div className="bg-img2 w-full z-10 h-full bg-contain bg-no-repeat bg-cover "/>
      <div className="bg-img3 w-full z-10 h-full bg-contain bg-no-repeat bg-cover "/>
      <div className="bg-img4 w-full z-10 h-full bg-contain bg-no-repeat bg-cover bg-top"/>
      </Carousel>
    </div>
      {/* <TECarousel showControls showIndicators ride="carousel">
        <div className="w-full h-96 overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://wise.com/imaginary/f905e44b2f3d06bd540428f5d202a849.jpg"
              className="block w-full"
              
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"> */}
            {/* <div className="w-full h-full px-5"> */}
    
        {/* <h1 className="text-7xl text-white font-serif">Welcome to PassportPro</h1>
        </div> 
        <p className="text-white text-lg font-serif mt-4 font-bold">Fast,reliable and secure passport verification online.</p>
        <button className="rounded-full bg-stone-950 px-10 py-3 text-white mt-4 font-bold" onClick={handleClick}>Start Now</button> */}

            {/* </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://www.passportindia.gov.in/AppOnlineProject/images/5years/slide5.JPG"
              className="w-full"
              alt="..."
              
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl"></h5>
              <p>
               
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://portal1.passportindia.gov.in/AppOnlineProject/images/5years/slide4.JPG"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl"></h5>
              <p>
                
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel> */}
    </div>
  );
}
export default Caraousel;