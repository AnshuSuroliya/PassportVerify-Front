import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Caraousel=()=>{
  return (
    <div className="mt-16">
      <TECarousel showControls showIndicators ride="carousel">
        <div className="w-full h-96 overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://wise.com/imaginary/f905e44b2f3d06bd540428f5d202a849.jpg"
              className="block w-full"
              
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <div className="w-full h-full px-5">
    
        <h1 className="text-7xl text-white font-serif">Welcome to PassportPro</h1>
        </div> 
        <p className="text-white text-lg font-serif mt-4 font-bold">Fast,reliable and secure passport verification online.</p>
        <button className="rounded-full bg-stone-950 px-10 py-3 text-white mt-4 font-bold" >Start Now</button>

            </div>
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
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
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
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}
export default Caraousel;