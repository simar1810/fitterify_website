"use client"
import ContactForm from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { fetchData, sendData } from '@/lib/api';
import { getRazorpyaOptions, loadRazorpayScript } from '@/lib/razorpay';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { X, CheckCircle2 } from 'lucide-react';

const ThankYouModal = ({ isOpen, onClose, planName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#1a1a1a] border border-white/10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500/20 p-4 rounded-full">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for subscribing to <span className="text-white font-semibold">{planName}</span>.
            Welcome to the Fitterify journey!
          </p>

          <button
            onClick={onClose}
            className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-xl transition-all active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SubscriptionModal = ({ isOpen, onClose, onSubmit, planName, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid Indian mobile number (10 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Subscribe to {planName}</h2>
            <p className="text-gray-400 text-sm">Please provide your details to proceed with the payment.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EE3324]/50 transition-all`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EE3324]/50 transition-all`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Mobile Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className={`w-full bg-white/5 border ${errors.mobileNumber ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EE3324]/50 transition-all`}
                />
              </div>
              {errors.mobileNumber && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.mobileNumber}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EE3324] hover:bg-[#d62d20] disabled:opacity-50 text-white font-bold py-4 rounded-xl mt-4 transition-all active:scale-[0.98]"
            >
              {loading ? "Processing..." : "Proceed to Pay"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProgramCard = ({ program }) => {
  const [payLoading, setPayLoading] = useState()
  const [error, setError] = useState()
  const [modalOpen, setModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const programName = program.name?.toLowerCase()

  async function handlePay(userDetails) {
    setPayLoading(true);
    setError("");
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error("Failed to load Razorpay script.");
        setPayLoading(false);
        return;
      }

      // Create Razorpay order using backend API
      const res = await sendData(`app/fitterfly/create-subscription`, {
        ...userDetails,
        planId: programName
      });

      if (res?.status_code !== 200) {
        toast.error(res?.message || "Could not create Razorpay order.");
        setPayLoading(false);
        return;
      }

      const options = getRazorpyaOptions(res.data)

      // Update prefill with user details
      options.prefill = {
        name: userDetails.name,
        email: userDetails.email,
        contact: `+91${userDetails.mobileNumber}`
      };

      // Add success handler
      options.handler = function (response) {
        console.log("Payment Success:", response);
        setModalOpen(false);
        setShowThankYou(true);
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err)
      toast.error(err.message || "Something went wrong")
      setError("Could not launch Razorpay checkout.");
    } finally {
      setPayLoading(false);
    }
  }

  return (
    <div className="relative rounded-2xl">
      <div className="bg-[#FFFFFF0D] backdrop-blur-2xl rounded-2xl p-8 h-full flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-[#EE3324] ring-1 ring-white/10">
        <div className="mb-8">
          <h3 className="text-white text-2xl font-extrabold mb-3">{program.name}</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#EE3324] text-3xl font-semibold">MRP: ₹{program.price.toLocaleString('en-IN')}</span>
            <span className="text-[#EDEDED80] font-poppins text-sm">Excl. of taxes</span>
          </div>
          <div className='border-[0.5px] border-gray-800 w-full'></div>
        </div>

        <div className="space-y-6 mb-8 grow">
          {program.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base mb-1">
                  {feature.title}
                </h4>
                <p className="font-poppins text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          disabled={payLoading}
          className="w-full bg-[#EE3324] hover:bg-red-700 text-white font-semibold py-4 rounded-full transition-colors disabled:opacity-50"
        >
          Buy Now
        </button>
      </div>

      <SubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handlePay}
        planName={program.name}
        loading={payLoading}
      />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        planName={program.name}
      />
    </div>
  );
};

const DiagnosticsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const TargetIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MeditationIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3c-1.2 0-2.4.6-3 1.7M12 3c1.2 0 2.4.6 3 1.7M12 3v18" />
    <circle cx="12" cy="12" r="3" />
    <path d="M3 12h6M15 12h6" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BadgeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-5-6.5 5 2-7L2 9h7l3-7z" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const PlanIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 3v18M3 9h18M3 15h18" />
  </svg>
);

const Page = () => {
  const programs = [
    {
      name: "IGNITE",
      description: "No matter how hard you train, your biology sets the ceiling. With optiME Club, we turn guesswork into precision.",
      tagline: "All-in-one system to help you improve strength, stamina, recovery, and resilience—through Data, Science & Expert Guidance",
      price: 9999,
      features: [
        {
          icon: DiagnosticsIcon,
          title: "DIAGNOSTICS",
          description: "1x Ultra Biomarker test\n1x Health Status Assessment"
        },
        {
          icon: PlanIcon,
          title: "TOOLS",
          description: "1x Personalised Health Blueprint\nAccess to Fitterify™ app (For 3 Months)\n1x Trainer Signals"
        },
        {
          icon: TargetIcon,
          title: "COACHING",
          description: "1x Doctor Consultation\n1x Health Coach Consultation"
        }
      ]
    },
    {
      name: "EVOLVE",
      description: "Is for people who keep quitting, restarting, and feeling lost.",
      tagline: "A structure you can finally stick to",
      price: 21999,
      features: [
        {
          icon: DiagnosticsIcon,
          title: "COMPLETE BLOODWORK PANEL",
          description: "Hormones, Metabolism, Deficiencies, Inflammation — everything inside your system."
        },
        {
          icon: SearchIcon,
          title: "DEEP ANALYSIS",
          description: "We find what’s slowing you down: low energy, bloating, slow metabolism, etc"
        },
        {
          icon: PlanIcon,
          title: "PRECISION PLAN",
          description: "Deficiency based supplements, Hormone Supportive Nutrition, Metabolism Friendly Training"
        },
        {
          icon: BadgeIcon,
          title: "90-DAY OUTCOME",
          description: "Better Energy, Better Digestion, Better Progress."
        }
      ]
    },
    {
      name: "RESET",
      description: "Is for people whose body has been 'off' for years.",
      tagline: "A structure you can finally stick to",
      price: 34999,
      features: [
        {
          icon: DiagnosticsIcon,
          title: "ADVANCED DIAGNOSTICS",
          description: "Gut tests, hormone analysis, metabolic markers, bloodwork."
        },
        {
          icon: TargetIcon,
          title: "IDENTIFY BREAKDOWN POINTS",
          description: "Digestion, Sleep, Stress, Metabolism, Inflammation — everything that's off."
        },
        {
          icon: MeditationIcon,
          title: "HEALING BLUEPRINT",
          description: "Gut-healing nutrition, Hormone-balancing supplements, Recovery-focused training, Lifestyle corrections"
        },
        {
          icon: CalendarIcon,
          title: "WEEKLY FOLLOW-UPS",
          description: "We repair your system step-by-step."
        },
        {
          icon: BadgeIcon,
          title: "90-DAY OUTCOME",
          description: "Better gut, Better sleep, Better metabolism, Better body."
        }
      ]
    }

  ];
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div id='program' className="bg-[#050504] min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[900px] h-[1000px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
      </div>
      <Navbar landing={false} />

      <div className="min-h-screen pt-44 pb-16 px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white mb-4">
            Pricing Plans
          </h1>
          <div className='w-60 border-2 mb-2 border-[#EE3324] text-center mx-auto'></div>
          <p className="font-poppins text-[#EDEDED] text-base md:text-lg max-w-3xl mx-auto">
            Pick a plan, commit to your journey, and let the transformation begin.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
        <p className='text-base md:text-lg font-poppins text-gray-300 text-center font-semibold mt-10'>Still confused about choosing a plan ? Speak to our expert and let us walk you through your wellness journey</p>
        <div className='w-full flex items-center justify-center mt-4'>
          <button onClick={() => setContactFormOpen(true)} className='cursor-pointer px-4 py-2 ring-1 ring-[#EE3324] bg-[#1a1a1a] rounded-2xl  text-[#EE3324] font-semibold'>Contact Us</button>
        </div>
      </div>
      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
      <Footer landing={false} />
    </div>
  );
};

export default Page;