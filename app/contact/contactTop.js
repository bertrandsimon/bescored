import Image from "next/image";

export default function ContactTop() {
  return (
    <div
      className="h-[350px] max-h-128 bg-cover"
      style={{ backgroundImage: "url(/images/contact/contact-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center">
        <div className="text-white uppercase oswald pl-[200px]">
          <p className="text-sm p-1">contactez nous</p>
          <p className="text-5xl p-1 font-extralight">nous sommes</p>
          <p className="text-5xl p-1 font-semibold">à votre écoute</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
