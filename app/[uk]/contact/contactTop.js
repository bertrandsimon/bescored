import Image from "next/image";

export default function ContactTop() {
  return (
    <div
      className="h-[350px] max-h-128 bg-cover"
      style={{ backgroundImage: "url(/images/contact/contact-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-sm p-1">contact us</p>
          <p className="text-5xl p-1 font-extralight">we are listening</p>
          <p className="text-5xl p-1 font-semibold">to your needs</p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
