import { BackPack } from "@/app/Logos/Backpack";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="rounded-sm">
        <div className="mx-4 flex items-center justify-between">
          <a href="/" className="flex items-center py-4 space-x-2">
            <BackPack />
            <span className="font-bold text-xl hover:text-cyan-400 transition duration-500">
              PackMyTrips
            </span>
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden md:block hover:text-white hover:bg-cyan-400 py-2 px-2 transition duration-300 rounded-xl"
            >
              Create Essentials Pack
            </a>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl shadow-sm">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
