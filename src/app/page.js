import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import EmailSection from "/src/components/EmailSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";

export const metadata = {
    title: "William.B's Portfolio",
    description: "Mon portfolio",
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
          <AboutSection />
        <AchievementsSection />
          <EmailSection />
      </div>
    </main>
  );
}
