import React from "react";
import profile from "../../assets/profile.svg";
import notifications from "../../assets/notifications.svg";

function DashNav() {
  return (
    <div className="flex items-center pl-[10px]  md:mb-[98px] pr-[53px] pt-[53px] w-screen ">
      <div className="flex items-center justify-between  gap-[547px]">
        <h4 className=" text-2xl ">Welcome, Thechemdesigner</h4>
        <div className="flex items-center gap-[24px] ">
          <img src={notifications} alt="" />
          <img src={profile} alt="" className="rounded-full " />
          {/* <h5>Thechemdesigner</h5> */}
        </div>
      </div>
    </div>
  );
}

export default DashNav;
