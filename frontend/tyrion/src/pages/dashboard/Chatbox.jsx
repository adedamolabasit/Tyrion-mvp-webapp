import React from "react";
import ChatReceiver from "../../components/chatbox/ChatReceiver";
import ChatSender from "../../components/chatbox/ChatSender";
import addtext from "../../assets/addtext.svg";

function Chatbox() {
  return (
    <div className="mx-center md:mt-[50px] w-full bg-white rounded-lg md:pt-[120px] md:pb-[21px] md:px-[28px] flex flex-col md:gap-[20px] overflow-y-scroll">
      {/* chat receiver */}
      <ChatReceiver />
      {/* chat sender */}
      <ChatSender />
      {/* chat receiver */}
      <ChatReceiver />
      {/* send chat */}

      <form action="" className=" self-center md:mt-[70px] ">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type something"
            className="md:w-[538px] md:h-[51px] md:pl-[36px] text-[#4f4949] rounded-lg bg-[#f2eeee] "
          />
          <img src={addtext} alt="" className="md:ml-[10px]" />
        </div>
      </form>
    </div>
  );
}

export default Chatbox;
