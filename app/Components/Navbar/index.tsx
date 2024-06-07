import { BackPack } from "@/app/Logos/Backpack";
import { auth } from "@/auth";
import AvatarDropdown from "../AvatarDropdown";

export default async function Navbar() {
  const session = await auth();

  let userElement;
  if (!session?.user) {
    // That means user is not logged in
    userElement = (
      <a
        href="/login"
        className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-3xl shadow-sm"
      >
        Sign in
      </a>
    );
  } else {
    // User is logged in
    const avatarURL = session.user.image as string;
    const name = session.user.name as string;
    const email = session.user.email as string;
    userElement = (
      <AvatarDropdown avatarURL={avatarURL} name={name} email={email} />
    );
  }

  return (
    <nav className="max-w-7xl mx-auto mt-1">
      <div className="rounded-sm">
        <div className="mx-4 flex items-center justify-between">
          <a href="/" className="flex items-center py-4 space-x-1">
            <BackPack />
            <span className="font-concert font-bold lg:text-3xl text-2xl text-gray-800 hover:text-blue-500 transition duration-500">
              PackMyTrip
            </span>
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden md:block hover:bg-gray-200 py-2 px-2 transition duration-300 rounded-xl"
            >
              Create Essentials Pack
            </a>
            {userElement}
          </div>
        </div>
      </div>
    </nav>
  );
}
