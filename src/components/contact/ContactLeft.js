import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-auto object-cover rounded-lg mb-2"
        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/422375639_892084392395437_8508552039103983862_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=o_UkovNju7MAX97W5r0&_nc_ht=scontent.fsgn5-12.fna&oh=03_AdToLQnVttjaZqxhU3hrO1XtY7VVXJ6vuSFSfk1wqXgjsA&oe=65DBE39E"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ho Duc Phap</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">0825820709</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hophap1311@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/ducphap1311" rel="noreferrer" target='_blank' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/ho-phap-0b6132236/" rel="noreferrer" target='_blank' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft