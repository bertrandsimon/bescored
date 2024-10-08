import Image from "next/image";

export default function CasesTop() {
  return (
    <div
      className="h-[350px] max-h-128 bg-cover"
      style={{ backgroundImage: "url(/images/cases/cases-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-sm p-1">30 years of experience</p>
          <p className="text-5xl p-1 font-extralight">beScored</p>
          <p className="text-5xl p-1 font-semibold">studies examples</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
