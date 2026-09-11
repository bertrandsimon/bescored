export default function ChroniquesTop() {
  return (
    <div
      className="h-[350px] max-h-128 expertise-bg bg-cover"
      style={{ backgroundImage: "url(/images/news/news-bg.jpg)" }}
    >
      <div className="flex pt-[160px] w-full justify-start items-center ">
        <div className="text-white uppercase oswald sm:pl-[200px] text-center sm:text-left mx-auto sm:mx-0">
          <p className="text-sm p-1">performance humaine</p>
          <p className="text-5xl p-1 font-extralight">chronique</p>
          <p className="text-5xl p-1 font-semibold">du lundi</p>
        </div>
      </div>
    </div>
  );
}
