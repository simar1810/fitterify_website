"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const [openAnswer, setOpenAnswer] = useState(-1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!question.trim()) {
    newErrors.question = "Question is required";
  }

  setErrors(newErrors);
  return newErrors;
};


const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    toast.error(Object.values(validationErrors)[0]); 
    return;
  }

  toast.success("Query Submitted! We'll connect you soon.");

  console.log({ name, email, question });

  setName("");
  setEmail("");
  setQuestion("");
  setErrors({});
};


    const handleOpen = (i) => {
        setOpenAnswer((prev) => (prev === i ? -1 : i));
    }
    const questionaire = [
        {
            question: "What is Fitterify?",
            answer: "Fitterify is a personalized fitness, nutrition, and wellness coaching platform designed around your body, lifestyle, and goals—not generic plans."
        },
        {
            question: "How is Fitterify different from other fitness apps?",
            answer: `Most apps give one-size-fits-all workouts.
                        Fitterify focuses on:
                        Personalized plans
                        Habit-based progress
                        Recovery, mobility & lifestyle health
                        Real coaching support—not just videos`
        },
        {
            question: "Do I need to be fit to start?",
            answer: "Not at all. Fitterify is beginner-friendly and adapts to your current fitness level, injuries, and comfort."
        },
        {
            question: "Are the plans customized for me?",
            answer: `Your plan is built using:
Your goals
Activity level & job type
Health conditions (if any)
Training history & recovery needs
Your plan evolves as you progress
`
        },
        {
            question: "What if I have a health condition or past injury?",
            answer: `Fitterify takes safety seriously.
You’ll be asked about:
Past surgeries
Injuries
Health conditions
Your plan is adjusted accordingly, and high-risk movements are avoided
`
        },
        {
            question: "How much time do I need to commit daily?",
            answer: "Most plans are designed for 30–60 minutes, but can be adjusted based on your schedule. Consistency matters more than duration."
        },
        {
            question: "Can I use Fitterify at home or at the gym?",
            answer: `Absolutely. Plans can be:
Home-based
Gym-based
Or a mix of both
You choose what fits your lifestyle.
`
        },
        {
            question: "Is Fitterify suitable for long-term health?",
            answer: "Yes. Fitterify is built for long-term wellness, not short-term transformations. The goal is to help you move better, feel better, and stay consistent for life."
        },
    ]
    return (
    <div className='bg-[#050504] min-h-screen'>
        <div className='absolute inset-0 pointer-events-none z-0 flex items-center justify-center'>
          <div className='w-[900px] h-[1000px] blur-3xl bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)]'>
          </div>    
        </div> 
        <Navbar landing={false} /> 
        <div className='min-h-screen pt-36 md:pt-38 xl:pt-52 2xl:pt-44 pb-20 mb-32 md:pb-0'>  
        <div className='rounded-full py-2 bg-[#FFFFFF29] backdrop-blur-md px-4 w-[180px] mx-6 md:mx-15 xl:mx-30 2xl:mx-40 mb-6 flex items-center justify-center'>
            <p className='uppercase font-bold text-[#EE3324] text-xs md:text-base'>Got Questions</p>
        </div>      
        <div className='max-w-[1200px] w-full md:w-auto lg:w-[900px] xl:w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start justify-center gap-8 2xl:justify-between'>
            <div className='w-full md:w-[670px] 2xl:w-[760px]'>
               <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-4">Frequently <span className='text-[#EE3324]'>Asked Questions</span></h2>
                <p className='text-[#EDEDED] font-poppins text-base xl:text-[22px] leading-5 xl:leading-7 w-full'>Have questions? Find quick answers to common queries about our programs and services.</p>   
                <div className='mt-10 grid grid-cols-1 gap-4 w-full'>
                    {questionaire.map((q, i) => (
                        <div key={i} className={`${openAnswer ===i ? 'bg-[#FFFFFF1A]': 'bg-transparent'} px-2 md:px-5 py-3 rounded-md border border-[#FFFFFF24]`}>
      
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-[#EE3324] font-semibold'>{q.question}</p>

                                <div
                                    onClick={() => handleOpen(i)}
                                    className='cursor-pointer w-6 h-6 md:w-5 md:h-5 rounded-full bg-white text-black text-base font-bold flex items-center justify-center'
                                >
                                    {openAnswer === i ? "-" : "+"}
                                </div>
                            </div>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAnswer === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}>
                                <p className='w-[270px] md:w-md xl:w-xl text-sm text-[#BFBFBF] font-semibold'>
                                    {q.answer}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
       
            </div>
            <div className='w-full md:w-[350px] 2xl:w-[350px] space-y-10 px-6 py-10 bg-[#00000040] backdrop-blur-lg border border-[#FFFFFF24] rounded-2xl'>
                <p className='text-[#FFFFFF] text-2xl font-bold'>Still Have <br />Questions?</p>  
                <form onSubmit={handleSubmit} className='space-y-3 w-full'>
                    <div className='flex flex-col items-start gap-3'>
                      <label className='text-sm text-[#FFFFFF] font-medium'>Name*</label> 
                      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='px-5 focus:border-[#EE332480] font-medium py-3 w-full bg-[#FFFFFF1A] text-[#BFBFBF] text-sm rounded-2xl' placeholder='eg. Kristian john'/>        
                    </div>        
                    <div className='flex flex-col items-start gap-3'>
                      <label className='text-sm text-[#FFFFFF] font-medium'>Email Address*</label> 
                      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className='px-5 focus:border-[#EE332480] font-medium py-3 w-full bg-[#FFFFFF1A] text-[#BFBFBF] text-sm rounded-2xl' placeholder='eg. Kjohn@examplegmail.com'/>        
                    </div>        
                    <div className='flex flex-col items-start gap-3'>
                      <label className='text-sm text-[#FFFFFF] font-medium'>Question*</label> 
                      <textarea value={question} rows={5} onChange={(e)=> setQuestion(e.target.value)} className='px-5 focus:border-[#EE332480] py-3 font-medium w-full bg-[#FFFFFF1A] text-[#BFBFBF] text-sm rounded-2xl' placeholder='question...'/>        
                    </div> 
                    <button type='submit' className='flex py-4 items-center justify-center rounded-2xl bg-[#EE332480] text-white text-sm font-bold w-full'>Submit</button>        
                </form>        
            </div>
        </div>
        </div> 
        <Footer landing={false} />   
    </div>
  )
}

export default Page
