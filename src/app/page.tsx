import { 
  Navbar, 
  Hero, 
  BentoGrid, 
  PremiumSection, 
  FeesSection, 
  CTAProposal, 
  Milestones, 
  Integrations, 
  MobileApp, 
  Footer,
  SmoothScrollProvider
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScrollProvider>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero />
          <BentoGrid />
          <PremiumSection />
          <FeesSection />
          <CTAProposal />
          <Milestones />
          <Integrations />
          <MobileApp />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
