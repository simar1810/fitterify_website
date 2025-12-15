"use client"
import Navbar from '@/components/NavbarRebound';
import React, { useState } from 'react';

const ProgramCard = ({ program }) => {

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 flex flex-col h-full">
      <div className="p-8 grow flex flex-col">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-[#050504] mb-2">
            {program.name}
          </h2>
          <p className="text-sm font-medium text-gray-500 mb-3">
            with <span className='text-[#EE3324]'>FITTERIFY</span>
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {program.description}
          </p>
        </div>

        <div className="inline-block mb-6">
          <span className="bg-[#52524f] text-white px-2 py-2 rounded-full text-[10px] font-semibold italic">
            WHAT&apos;S INCLUDED
          </span>
        </div>

        <div className="space-y-6 mb-8 grow">
          {program.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#EE3324] flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#050504] text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 mt-auto">
          <p className="text-gray-600 text-sm mb-4">
            {program.tagline}
          </p>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xl xl:text-4xl font-bold text-[#050504]">
                ₹{program.price.toLocaleString('en-IN')}
              </span>
              <span className="text-gray-500 text-sm ml-2">+GST</span>
            </div>
            <button className="bg-[#EE3324] text-white px-4 py-1 lg:py-2 xl:py-3 rounded-full font-semibold hover:bg-[#d62b1f] transition-colors">
              <p className='lg:text-sm xl:text-base'>Get Started</p>
            </button>
          </div>
        </div>
      </div>
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
          description: "we find what’s slowing you down: low energy, bloating, slow metabolism, etc"
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
      name: "IGNITE",
      description: "No matter how hard you train, your biology sets the ceiling. With optiME Club, we turn guesswork into precision.",
      tagline: "All-in-one system to help you improve strength, stamina, recovery, and resilience—through Data, Science & Expert Guidance",
      price: 8999,
      features: [
        {
          icon: DiagnosticsIcon,
          title: "DIAGNOSTICS",
          description: "1x Ultra Biomarker test\n1x Health Status Assessment"
        },
        {
          icon: PlanIcon,
          title: "TOOLS",
          description: "1x Personalised Health Blueprint\nAccess to Resolute™ app (For 3 Months)\n1x Trainer Signals"
        },
        {
          icon: TargetIcon,
          title: "COACHING",
          description: "1x Doctor Consultation\n1x Health Coach Consultation"
        }
      ]
    }
  ];

  return (
    <div>
     <Navbar/>     
    <div className="min-h-screen bg-white pt-30 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-5xl font-bold text-[#050504] mb-4">
            Our Programs
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Choose the program that fits your health journey. Each designed with precision to help you achieve lasting transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
          </div>
    </div>
  );
};

export default Page;