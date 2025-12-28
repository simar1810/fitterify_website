import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CorporateHome from '@/components/CorporateHome';
import WeDifferent from '@/components/WeDifferent';
import WhyDifferent from '@/components/WhyDifferent';
import HowItWorks from '@/components/HowItWorks';
import CompanySee from '@/components/CompanySee';
const Page = () => {
  return (
    <div>
      <Navbar landing={false} />
      <CorporateHome />
      <WeDifferent />
      <WhyDifferent />
      <HowItWorks />
      <CompanySee/>
      <Footer landing={false} />
    </div>
  );
}

export default Page
