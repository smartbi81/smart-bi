import Hero from '@/components/ui/animated-shader-hero';
import Navbar from '@/components/ui/navbar';
import Services from '@/components/sections/services';
import Stats from '@/components/sections/stats';
import Process from '@/components/sections/process';
import CloudBadges from '@/components/sections/cloud-badges';
import CaseStudies from '@/components/sections/case-studies';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'SMART BI — שירותים ומומחיות',
  description: 'מגוון שירותי BI ודאטה — מדשבורדים ועד אוטומציה ו-AI. הכל תחת קורת גג אחת.',
};

export default function OverviewPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div id="services">
          <Services />
        </div>
        <CloudBadges />
        <div id="process">
          <Process />
        </div>
        <div id="cases">
          <CaseStudies />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
