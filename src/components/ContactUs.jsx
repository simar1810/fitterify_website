"use client"
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    toast.success("Thank you for contacting us! We'll get back to you soon.");
    
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-999 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-md p-8 relative shadow-[0_0_60px_rgba(238,51,36,0.3)] ring-1 ring-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer transition"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-white mb-2">Contact Us</h2>
          <p className="text-sm text-[#E0E0E0] font-poppins">
            Fill out the form below and we&apos;ll get back to you soon.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold font-poppins text-[#E0E0E0] mb-2 uppercase">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF0D] backdrop-blur-sm text-white border border-white/10 focus:border-[#EE3324] focus:ring-2 focus:ring-[#EE3324]/20 outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold font-poppins text-[#E0E0E0] mb-2 uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF0D] backdrop-blur-sm text-white border border-white/10 focus:border-[#EE3324] focus:ring-2 focus:ring-[#EE3324]/20 outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold font-poppins text-[#E0E0E0] mb-2 uppercase">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF0D] backdrop-blur-sm text-white border border-white/10 focus:border-[#EE3324] focus:ring-2 focus:ring-[#EE3324]/20 outline-none transition"
              placeholder="+91 xxxxx xxxxx"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-[#EE3324] hover:bg-[#d62e1f] disabled:bg-[#EE3324]/50 text-white font-extrabold py-3 rounded-full transition uppercase text-sm shadow-[0_0_20px_rgba(238,51,36,0.4)] disabled:cursor-not-allowed font-poppins"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}