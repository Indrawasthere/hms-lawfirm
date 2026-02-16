import Hero from "@/app/components/sections/hero";
import ValueProps from "@/app/components/sections/value-props";
import Services from "@/app/components/sections/services";
import Team from "@/app/components/sections/team";
import Testimonials from "@/app/components/sections/testimonials";
import Contact from "@/app/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
