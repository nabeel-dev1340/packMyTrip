import { redirect } from "next/navigation";
import { Hero } from "./Components/Hero";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  // const session = await auth();

  // console.log(session?.user);

  // if (!session?.user) {
  //   redirect("/login?callbackUrl=/");
  // }

  return (
    <div className="py-20">
      <Hero />
      {/* <p>{session?.user?.email}</p>
      <Image
        src={session?.user?.image as string}
        alt="User Avatart"
        width={50}
        height={50}
      /> */}
    </div>
  );
}
