export default function Products() {
  const products = [
    {
      title: "Jaw Crusher",
      description:
        "Engineered for primary crushing of hard rock and large materials. Built with heavy-duty frames and high-capacity chambers for maximum durability.",
      image: "/images/product-jaw.png",
    },
    {
      title: "Cone Crusher",
      description:
        "Designed for precision secondary and tertiary crushing. Achieves superior particle shape and consistent performance in every load.",
      image: "/images/product-cone.png",
    },
    {
      title: "Vibrating Screen",
      description:
        "High-efficiency screening equipment for separating materials by size. Ensures uniform quality for aggregate production.",
      image: "/images/product-screen.png",
    },
    {
      title: "Conveyor System",
      description:
        "Robust and efficient material handling conveyors built to transport aggregates smoothly between crushing stages.",
      image: "/images/product-conveyor.png",
    },
    {
      title: "Crushing Plant Setup",
      description:
        "Turnkey stone crusher plant installations — from design to commissioning — ensuring productivity, safety, and sustainability.",
      image: "/images/product-plant.png",
    },
    {
      title: "Spare Parts & Maintenance",
      description:
        "Genuine spare parts and service support for all crushing and screening equipment, ensuring long-term reliability.",
      image: "/images/product-spares.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 text-center" id="products">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-gray-900">
        Our <span className="text-yellow-600">Products & Solutions</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We design, manufacture, and supply world-class crushing equipment and complete plant
        solutions — engineered to deliver performance, durability, and value for every project.
      </p>
    </section>
  );
}
