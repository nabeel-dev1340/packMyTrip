import Image from "next/image";
export function Hero() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 max-w-5xl mx-auto">
      <h1 className="mx-4 md:text-5xl text-4xl text-center font-extrabold text-wrap">
        Essential Gear, Perfectly Packed
      </h1>
      <p className="mx-4 md:text-xl text-center text-wrap">
        Planning a trip? PackMyTrip ensures you don’t miss a thing. Get a custom
        packing list tailored to your itinerary. Pack with confidence using
        PackMyTrip.
      </p>
      <Image
        src="./hero.svg"
        width={600}
        height={600}
        alt="person with backpack on a beach"
      />
    </div>
  );
}
