import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function SendForm() {
  const form = useRef();

  const SendToMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_40uedfe", "template_kf3kvdb", form.current, {
        publicKey: "lxOwRH_KTWXhAXm09",
      })
      .then(
        () => {
          form.current = "";
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <form ref={form} onSubmit={SendToMail}>
        <div className="flex flex-col mt-2.5">
          <label className="text-sm font-medium text-slate-200 mb-1">
            Your Name<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
            type="text"
            name="user_name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col mt-2.5">
          <label className="text-sm font-medium text-slate-200 mb-1">
            Your Email<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
            type="mail"
            name="user_email"
            placeholder="Johndoe@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col mt-2.5">
          <label className="text-sm font-medium text-slate-200 mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
            type="text"
            name="message"
            placeholder="Hello, I'm John Doe let's be friends"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full h-10 mt-4 rounded-md bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-slate-200 font-normal "
        >
          Send
        </button>
      </form>
    </>
  );
}

export default SendForm;
