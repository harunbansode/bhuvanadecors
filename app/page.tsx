import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Services from "./components/Services";

// Add these lines to fix the "missing generateStaticParams" error
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ tool: [] }];
}


export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Services />
    </>
  );
}
