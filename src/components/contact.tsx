import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, ExternalLink, Sparkles } from "lucide-react";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { PERSONAL_INFO } from "../constants";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;

    let isValid = true;

    if (name.trim().length < 3) {
      nameError?.classList.remove("hidden");
      isValid = false;
    } else {
      nameError?.classList.add("hidden");
    }

    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError?.classList.remove("hidden");
      isValid = false;
    } else {
      emailError?.classList.add("hidden");
    }

    if (message.trim().length < 5) {
      messageError?.classList.remove("hidden");
      isValid = false;
    } else {
      messageError?.classList.add("hidden");
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return false;

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID || "service_default",
        import.meta.env.VITE_APP_TEMPLATE_ID || "template_default",
        {
          from_name: form.name,
          to_name: PERSONAL_INFO.name,
          reply_to: form.email.trim().toLowerCase(),
          to_email: PERSONAL_INFO.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_KEY || "key_default"
      )
      .then(() => {
        toast.success("Thank you! Message sent to Ashutosh.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("[CONTACT_ERROR]: ", error);
        toast.info("Direct message logged. You can also email directly at Ashutoshrai.contact@gmail.com");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        {/* Form Container */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#0b1120] p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-2xl space-y-6"
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Mail className="w-4 h-4" /> Reach Out
            </div>
            <h3 className={styles.sectionHeadText}>Contact Me.</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Have a project, startup idea, or hackathon collaboration in mind? Drop a message below.
            </p>
          </div>

          {/* Quick Direct Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-slate-400">Direct Email</p>
                <p className="text-xs font-semibold text-white truncate">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400">LinkedIn Profile</p>
                <p className="text-xs font-semibold text-white">ashutosh-pankaj-rai</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 pt-2">
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white text-xs font-semibold mb-2">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Alex Johnson"
                disabled={loading}
                className="bg-slate-900/90 border border-slate-800 focus:border-cyan-500 py-3 px-4 placeholder:text-slate-500 text-white rounded-xl outline-none text-xs sm:text-sm font-medium transition"
              />
              <span className="text-red-400 text-xs mt-1 hidden" id="name-error">
                Please enter a valid name (min 3 characters).
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white text-xs font-semibold mb-2">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                disabled={loading}
                className="bg-slate-900/90 border border-slate-800 focus:border-cyan-500 py-3 px-4 placeholder:text-slate-500 text-white rounded-xl outline-none text-xs sm:text-sm font-medium transition"
              />
              <span className="text-red-400 text-xs mt-1 hidden" id="email-error">
                Please enter a valid email address.
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white text-xs font-semibold mb-2">Your Message*</span>
              <textarea
                rows={5}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your product, project, or collaboration..."
                disabled={loading}
                className="bg-slate-900/90 border border-slate-800 focus:border-cyan-500 py-3 px-4 placeholder:text-slate-500 text-white rounded-xl outline-none text-xs sm:text-sm font-medium resize-none transition"
              />
              <span className="text-red-400 text-xs mt-1 hidden" id="message-error">
                Please enter a message (min 5 characters).
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-8 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Sending Message..." : "Send Message to Ashutosh"}</span>
            </button>
          </form>
        </motion.div>

        {/* 3D Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
