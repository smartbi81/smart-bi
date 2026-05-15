import Navbar from '@/components/ui/navbar';
import Hero from '@/components/ui/animated-shader-hero';
import Differentiator from '@/components/sections/differentiator';
import Channels from '@/components/sections/channels';
import Services from '@/components/sections/services';
import CaseStudies from '@/components/sections/case-studies';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'SMART BI — שכבת האינטליגנציה של הדאטה שלכם',
  description:
    'לא עוד דוחות. תובנות. Smart BI סורק את הדאטה שלכם, מאתר סיבות לשינויים, ומספק המלצות ברורות לפעולה.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero עם הויזואליזציה הגרפית */}
        <Hero />

        {/* פער + יכולות + ערך עסקי */}
        <Differentiator />

        {/* ערוצי תקשורת + מייל תובנות */}
        <Channels />

        {/* שירותים */}
        <div id="services">
          <Services />
        </div>

        {/* תרחישים */}
        <div id="cases">
          <CaseStudies />
        </div>

        {/* צור קשר */}
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
