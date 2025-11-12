import Card from "@/components/Card";

export default function Products() {
  const products = [
    {
      title: "Jaw Crusher",
      description:
        "Engineered for primary crushing of hard rock and large materials. Built with heavy-duty frames and high-capacity chambers for maximum durability.",
      image: "/my-static-site/images/product-jaw.png",
    },
    {
      title: "Cone Crusher",
      description:
        "Designed for precision secondary and tertiary crushing. Achieves superior particle shape and consistent performance in every load.",
      image: "/my-static-site/images/product-cone.png",
    },
    {
      title: "Vibrating Screen",
      description:
        "High-efficiency screening equipment for separating materials by size. Ensures uniform quality for aggregate production.",
      image: "/my-static-site/images/product-screen.png",
    },
    {
      title: "Conveyor System",
      description:
        "Robust and efficient material handling conveyors built to transport aggregates smoothly between crushing stages.",
      image: "/my-static-site/images/product-conveyor.png",
    },
    {
      title: "Crushing Plant Setup",
      description:
        "Turnkey stone crusher plant installations — from design to commissioning — ensuring productivity, safety, and sustainability.",
      image: "/my-static-site/images/product-plant.png",
    },
    {
      title: "Spare Parts & Maintenance",
      description:
        "Genuine spare parts and service support for all crushing and screening equipment, ensuring long-term reliability.",
      image: "/my-static-site/images/product-spares.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-28 px-6 text-center" id="products">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
        Our <span className="text-yellow-600">Products & Solutions</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12">
        We design, manufacture, and supply world-class crushing equipment and complete plant
        solutions — engineered to deliver performance, durability, and value for every project.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} image={p.image} />
        ))}
      </div>
    </section>
  );
}
