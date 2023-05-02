import React from "react";
import background from "../assets/background.jpg";
export const Contact = () => {
  return (
    //w-full h-screen object-cover object-left scale-x-[1]

    //original max-w-[1040px] m-auto md:pl-20 p-4 py-16

    <div id="contact" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16      bg-blue opacity-80">
      <h1 className="py-4 text-4xl font-bold text-center text-white">
        Contact
      </h1>
      <form
        action="https://getform.io/f/e06d789d-b6ba-4486-9d4d-6aca07353739"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
          <div className="flex flex-col">
            <label className="uppercase-text-sm py-2 text-white">Name</label>
            <input
            required
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase-text-sm py-2 text-white">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase-text-sm py-2 text-white">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase-text-sm py-2 text-white">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase-text-sm py-2 text-white">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            required
            rows={10}
            type="email"
            name="message"
          ></textarea>
        </div>
        <button className="bg-[#6c84c0] text-white mt-4 w-full p-4 rounded-lg hover:bg-sky-700 hover:scale-105">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
