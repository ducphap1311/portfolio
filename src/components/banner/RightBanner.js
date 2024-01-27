import React from 'react'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[auto] lgl:w-[300px] lgl:h-[auto] z-10 rounded-2xl"
        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/421261733_363848326399080_2908622416213277530_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=892tlQDhmjUAX-JJpgK&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdRQq6KYtXb-603VXHbXhGo3RBKo03j3XkG7lTZM7V0-9w&oe=65DC5DC5"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner