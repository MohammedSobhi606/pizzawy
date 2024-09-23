import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
function About() {
  return (
    <div>
      {" "}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"about"} text2={"us"} />
      </div>
      {/* about us */}
      <div className="flex flex-col gap-16 my-10 md:flex-row  text-gray-700 text-center">
        <img className="w-full md:w-[450px]" src={assets.about_img} alt="" />
        <div className=" flex flex-col gap-6 md:w-1/2 justify-center text-gray-600">
          <h1 className="text-2xl font-bold">Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi. Nulla facilisi.
            Donec vel velit eget ligula viverra pretium. Nulla facilisi. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi.
          </p>
          <h1 className="text-2xl font-bold">Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi. Nulla facilisi.
            Donec vel velit eget ligula viverra pretium. Nulla facilisi. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi.
          </p>
          <h1
            className="text-2
        font-bold"
          >
            Our Vision
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi. Nulla facilisi.
            Donec vel velit eget ligula viverra pretium. Nulla facilisi. Sed vel
            velit eget ligula viverra pretium. Nulla facilisi.
          </p>
        </div>
      </div>
      <div className="text-2xl">
        <Title text1={"why"} text2={"choose us"} />
      </div>
      {/* why choose us */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-4">
        {[1, 2, 3, 4].map((item, i) => (
          <div className="flex flex-col gap-6 border p-4 rounded-md" key={i}>
            <div className="flex items-center justify-center ">
              <img className="w-12 h-12" src={assets.support_img} alt="" />
            </div>
            <h1 className="text-lg font-bold">{i}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              velit eget ligula viverra pretium. Nulla facilisi. Nulla facilisi.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
