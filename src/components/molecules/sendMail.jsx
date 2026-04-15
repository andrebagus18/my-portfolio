import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function SendMail() {
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
    <div className="mt-20" id="mail">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-cyan-500 font-bold text-3xl">
          Let's Connct and Say Hi
        </h1>
        <hr className="w-10 rounded-full h-0.5 mt-1 bg-slate-300" />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col md:w-lg">
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
                // value={dataForm.fullName}
                // onChange={handleChange}
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
                // value={dataForm.fullName}
                // onChange={handleChange}
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
                // value={dataForm.fullName}
                // onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 mt-4 rounded-md bg-cyan-500 text-slate-200 font-normal "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendMail;
