import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 px-10 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <Card title="Fast" description="Built with Next.js static generation for maximum speed." />
        <Card title="Modern" description="Styled with Tailwind CSS for sleek, responsive design." />
        <Card title="Futuristic" description="Ready for modern deployment with Vercel or Netlify." />
      </section>
    </>
  );
}
