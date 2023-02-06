import React from "react";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";

function Contact() {
  return (
    <div className="ml-[10px]">
      <h4 className="font-bold text-xl mb-[18px]  ">Contact</h4>
      <p>Phone number: +234 905 678 4456</p>
      <p>E-mail address: hello@tyrionexchange</p>
      <div className="flex gap-[8px]">
        <img src={insta} alt="" className="w-[18px]" />
        <img src={twitter} alt="" className="w-[18px]" />
        <p>Tyrionexchange</p>
      </div>
    </div>
  );
}

export default Contact;
