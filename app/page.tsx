import { WaitlistSection } from "./landingpagecomponents/Cta";
import { DifferentiationSection } from "./landingpagecomponents/Differentiation";
import { FeaturesSection } from "./landingpagecomponents/Features";
import FooterSection from "./landingpagecomponents/Footer";
import Header from "./landingpagecomponents/Header";
import { MVPSection } from "./landingpagecomponents/Mvp";
import { PrivacySection } from "./landingpagecomponents/Privacy";
import { ProblemSection } from "./landingpagecomponents/Problem";
import { ProfilePreviewSection } from "./landingpagecomponents/ProfilePreview";
import { SolutionSection } from "./landingpagecomponents/Solution";

export default function LandingPage() {
    return (
    //   <main className="min-h-screen bg-[#F2FD7D] text-[#28443F]">
      <main className=" bg-[#F7FAF9] text-[#28443F]">
        <Header/>
        <ProblemSection/>
        <SolutionSection/>
        {/* <ProfilePreviewSection/> */}
        <FeaturesSection/>
        <DifferentiationSection/>
        <MVPSection/>
        <PrivacySection/>
        <WaitlistSection/>
        <FooterSection/>
      </main>
    )
  }
  