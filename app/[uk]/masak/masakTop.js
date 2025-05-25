import Image from "next/image";

export default function MasakTop() {
  return (
    <div
      className="h-[350px] max-h-128 expertise-bg bg-cover"
      style={{ backgroundImage: "url(/images/masak/masak-bg2.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-sm p-1">MASAK</p>
          <p className="text-5xl p-1 font-extralight">Mental Health </p>
          <p className="text-5xl p-1 font-semibold">Assessment Kit</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
