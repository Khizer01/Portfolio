import Hero from "./components/hero/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/grid/Grid";
import { navItems } from "./data";
import RecentProject from "./components/recentProject/RecentProject";
import { Certifications } from "./components/certifications/Certification";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import ContactForm  from "./components/form/Form";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Certifications />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
