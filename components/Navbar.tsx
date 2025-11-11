export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Static Site</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/products" className="hover:text-gray-400">Products</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
