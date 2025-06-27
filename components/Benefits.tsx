import React from "react";
import First from "./animations/First";
import Second from "./animations/Second";

const Benefits = () => {
  return (
    <div className="h-fit my-[100px] w-[100vw] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-semibold tracking-tighter pb-10">
          {"["} Our Proven Process {"]"}{" "}
        </h1>
      </div>
      <div className="h-fit w-[64vw] flex flex-col bg-gray-400 rounded-3xl">
        <div className="w-full h-fit flex  mt-1">
          <div className="h-[430px] w-[65%]  bg-white rounded-3xl ml-1 mr-0.5  flex flex-col justify-between relative overflow-hidden">
            <div className="p-10">
              <h1 className="tracking-tighter font-medium text-2xl ">
                Discovery
              </h1>
              <p className="text-[15px] mt-2 text-gray-700">
                We analyze your current systems and identify optimization
                opportunities
              </p>
            </div>

            <div className="w-full h-[70%] ">
              <First />
            </div>
            <h2 className="absolute bottom-5 left-10 font-semibold text-2xl text-gray-400 ">
              01
            </h2>
          </div>
          <div className="h-[430px] w-[35%] bg-white rounded-3xl mr-1 ml-0.5  flex flex-col justify-between relative overflow-hidden">
            <div className="p-10">
              <h1 className="tracking-tighter font-medium text-2xl ">
                Strategy
              </h1>
              <p className="text-[15px] mt-2 text-gray-700">
                Custom roadmap development aligned with your business objectives
              </p>
            </div>
            <div className='w-full h-[70%] '>
                            <Second />
                        </div>
                        <h2 className='absolute bottom-5 left-10 font-semibold text-2xl text-gray-400'>02</h2>
                      
          </div>
        </div>

        <div className="w-full h-fit flex mt-1 mb-1">
          <div className="h-[430px] w-[35%] bg-white rounded-3xl ml-1 mr-0.5  flex flex-col justify-between relative overflow-hidden">
            <div className="p-10">
              <h1 className="tracking-tighter font-medium text-2xl ">
                Implementation
              </h1>
              <p className="text-[15px] mt-2 text-gray-700">
                Seamless deployment with minimal disruption to your operations
              </p>
            </div>
            <h2 className="font-semibold text-2xl text-gray-400">03</h2>
          </div>
          <div className="h-[430px] w-[65%] bg-white rounded-3xl mr-1 ml-0.5  flex flex-col justify-between relative overflow-hidden">
            <div className="p-10">
              <h1 className="tracking-tighter font-medium text-2xl ">
                Support
              </h1>
              <p className="text-[15px] mt-2 text-gray-700">
                Ongoing optimization and 24/7 support to ensure continued
                success
              </p>
            </div>
            <h2 className="font-semibold text-2xl text-gray-400">04</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
