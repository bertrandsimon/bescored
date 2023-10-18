import Image from "next/image";

export default function TeamTop() {
  return (
    <div
      className="h-[350px] max-h-128 bg-cover"
      style={{ backgroundImage: "url(/images/team/bienetre-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald pl-[200px]">
          <p className="text-sm p-1">notre équipe</p>
          <p className="text-5xl p-1 font-extralight">expérience</p>
          <p className="text-5xl p-1 font-semibold">et savoir faire</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
