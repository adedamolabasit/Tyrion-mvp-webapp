import React from "react";
import ham from "../../assets/mobile-ham.svg";
import logo from "../../assets/loggo.svg";
import notifications from "../../assets/notifications.svg";
import profile from "../../assets/profile-photo.svg";

function MobileNav() {
  return (
    <div className="px-[40px] pt-[31px] flex items-center justify-between pb-[43px] w-screen">
      <img src={ham} alt="" />
      <img src={logo} alt="" />
      <div className="flex items-center gap-[10px] ">
        <img src={notifications} alt="" className="w-[12px] h-[14px] " />
        <img src={profile} alt="" className="rounded-full" />
      </div>
    </div>
  );
}

export default MobileNav;
