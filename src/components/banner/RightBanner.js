import React from 'react'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[auto] lgl:w-[300px] lgl:h-[auto] z-10"
        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/422375639_892084392395437_8508552039103983862_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=o_UkovNju7MAX97W5r0&_nc_ht=scontent.fsgn5-12.fna&oh=03_AdToLQnVttjaZqxhU3hrO1XtY7VVXJ6vuSFSfk1wqXgjsA&oe=65DBE39E"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner