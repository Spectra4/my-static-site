import Card from "@/components/Card";

export default function Products() {
  const products = [
    { title: "Premium Hosting", description: "Fast, secure, and reliable web hosting solutions." },
    { title: "Custom Design", description: "Pixel-perfect designs tailored for your brand." },
    { title: "SEO Optimization", description: "Boost your ranking with clean, optimized code." },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Products & Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}
