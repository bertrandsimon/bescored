import Image from "next/image";

export default function ExpertiseTop() {
  return (
    <div
      className="h-[350px] max-h-128 expertise-bg bg-cover"
      style={{ backgroundImage: "url(/images/expertise/expertise-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald pl-[200px]">
          <p className="text-sm p-1">notre expertise</p>
          <p className="text-5xl p-1 font-extralight">lorem</p>
          <p className="text-5xl p-1 font-semibold">ipsum</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
