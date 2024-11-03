import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const ContactUs = () => {
  return (
    <div className="flex px-40 pb-32 ">
      <div className=" space-y-4">
        <h1 className="text-[46px] text-tertiary font-bold">
          <span className="text-primary">Get in Touch</span> with me
        </h1>
        <p className="">
          Please fill out the form below to send me an email and I will get back
          to you as soon as possible.
        </p>
        <div className="space-y-5">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <textarea
            className="border-b border-b-tertiary text-tertiary placeholder:text-primary placeholder:opacity-75 py-4 px-2 w-full focus:border-b-primary  outline-none"
            placeholder="Message"
          />
          <Button content="Submit" className="w-full text-center" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ContactUs;
