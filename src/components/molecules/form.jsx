import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function SendForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const SendToMail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    emailjs.sendForm("service_40uedfe", "template_kf3kvdb", form.current, {
      publicKey: "lxOwRH_KTWXhAXm09",
    });
    try {
      setStatus("success");
      form.current.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setStatus("");
      }, 1500);
    }
  };

  return (
    <>
      <div className="w-full mx-auto">
        {status === "success" && (
          <div className="bg-green-300 text-center py-3 px-2 rounded">
            ✅ Pesan berhasil dikirim!
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-300 text-center py-3 px-2 rounded">
            ❌ Gagal mengirim pesan!
          </div>
        )}
      </div>

      <form ref={form} onSubmit={SendToMail}>
        <div className="flex flex-col mt-2.5">
          <label className="text-md md:text-lg font-medium text-slate-200 mb-1">
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
          <label className="text-md md:text-lg font-medium text-slate-200 mb-1">
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
          <label className="text-md md:text-lg font-medium text-slate-200 mb-1">
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
          disabled={loading}
          className={`w-full h-10 md:h-14 text-md md:text-lg lg:text-xl mt-4 rounded-md cursor-pointer font-normal ${loading ? "glass-bg cursor-not-allowed text-black border border-cyan-800/40" : "glass-bg hover:text-cyan-600 hover:border-cyan-700 text-slate-200"}`}
        >
          {loading ? "Send Message 🛇" : "Send Message"}
        </button>
      </form>
    </>
  );
}

export default SendForm;
