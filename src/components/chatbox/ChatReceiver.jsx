import React from "react";

function ChatReceiver() {
  return (
    <div className="flex md:gap-[18px]">
      <div className="md:w-[49px] md:h-[49px] border border-[#fcb108] rounded-full flex items-center justify-center ">
        <h1 className="font-bold md:text-2xl text-[#fcb108]">A</h1>
      </div>
      <p className="md:text-sm md:max-w-[500px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum expedita
        iste, libero ad distinctio quam?
      </p>
    </div>
  );
}

export default ChatReceiver;
