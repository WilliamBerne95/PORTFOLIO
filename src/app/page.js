import HeroSection from "@/components/HeroSection";
import EmailSection from "/src/components/EmailSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";

export const metadata = {
    title: "Portfolio de William Berne",
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
