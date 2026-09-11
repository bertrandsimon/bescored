export default function TeamTop() {
  return (
    <div
      className="h-[350px] max-h-128 bg-cover"
      style={{ backgroundImage: "url(/images/team/bienetre-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-4xl sm:text-5xl p-1 font-extralight">our</p>
          <p className="text-4xl sm:text-5xl p-1 font-semibold">
            medical &amp; scientific team
          </p>
        </div>
      </div>
    </div>
  );
}
