import Image from "next/image";

export default function MasakTop() {
  return (
    <div
      className="h-[350px] max-h-128 expertise-bg bg-cover"
      style={{ backgroundImage: "url(/images/masak/masak-bg2.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-sm p-1">Medical device</p>
          <p className="text-4xl sm:text-5xl p-1 font-extralight">
            Mental &amp; Physical
          </p>
          <p className="text-4xl sm:text-5xl p-1 font-semibold">
            Well-being Report
          </p>
        </div>
      </div>
    </div>
  );
}
