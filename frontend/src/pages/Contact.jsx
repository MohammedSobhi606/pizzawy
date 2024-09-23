import React from "react";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import NewsletterBox from "../Components/NewsletterBox";
function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"contact"} text2={"us"} />
      </div>
      <div className="my-10  flex flex-col  justify-center md:flex-row gap-10 mb-28 ">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="uppercase text-gray-600 font-semibold text-xl ">
            our store
          </p>
          <p>
            <span className="font-bold text-gray-900">Address:</span>
            <br />
            Street, City, Country
          </p>
          <p>
            <span className="font-bold text-gray-900">Phone:</span>
            <br />
            +1 123 456 7890
          </p>
          <p>
            <span className="font-bold text-gray-900">Email:</span>
            <br />
            info@example.com
          </p>
          <p>
            <span className="font-bold text-gray-900">Opening hours:</span>
            <br />
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 9:00 AM - 10:00 PM
            <br />
            Sunday: Closed
            <br />
            Holidays: Closed
            <br />
            <br />
            <span className="font-bold text-gray-900">Payment methods:</span>
            <br />
            Credit cards, PayPal, Bitcoin, etc.
            <br />
            <br />
            <span className="font-bold text-gray-900">
              Returns and exchanges:
            </span>
            <br />
            Return within 7 days. No questions asked.
            <br />
            <br />
            <span className="font-bold text-gray-900">Secure shopping </span>
          </p>
          <p>
            We use SSL encryption to protect your personal information while
            shopping.
          </p>
          <button className="outline-none border-purple-300 border-2 px-3 py-1 bg-teal-100">
            {" "}
            Explore Jobs...
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
