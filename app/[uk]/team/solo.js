import Image from "next/image";

export default function Solo() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="uppercase oswald text-4xl ">
            <span className="pr-2 font-semibold">our</span>
            <span className="font-light">team</span>
          </p>

          <p className="mt-6 text-light">
            Experts at your service to accompany you in your projects.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 pt-14">
          <div className="mx-auto h-48 w-48 rounded-full overflow-hidden">
            <Image
              src="/images/team/chris.jpg"
              alt=""
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            Dr. Christophe HAUSSWIRTH, PhD.
          </h3>
          <p className="text-base leading-7 text-gray-600">CEO and Founder</p>
          <p className="mt-6 text-base leading-7 text-gray-600 text-justify">
            During his 20 years at INSEP as a researcher and Director of the
            Research Department, and with six Olympic Games under his belt,
            Christophe HAUSSWIRTH has developed expertise in high-level sports
            which he now leverages in beScored Institute. In parallel,
            Christophe Hausswirth has authored 7 reference books including
            &apos&Improving Recovery in Sports&apos& and &apos&Nutrition and
            Performance in Sports&apos&. He also has an extensive list of over
            150 scientific publications in high-impact specialized journals. He
            has written 18 book chapters by invitation and has also spoken at
            nearly 180 conferences and seminars in France and internationally on
            physiology and sports training, as well as on individual health and
            well-being. Additionally, he is currently a researcher and associate
            member at LAMHESS (Université Côte d&apos&Azur) and a Professor at
            the University of Technology Sydney (UTS).
          </p>
        </div>
      </div>
    </div>
  );
}
