import Image from "next/image";
export function Hero() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 max-w-5xl mx-auto">
      <h1 className="mx-4 md:text-5xl text-4xl text-center font-extrabold text-wrap">
        Your Ultimate Travel Packing Assistant
      </h1>
      <p className="mx-4 md:text-xl text-center text-wrap">
        Say goodbye to packing stress! PackMyTrip organizes your gear
        efficiently, ensuring you have everything you need for an unforgettable
        trip.
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
