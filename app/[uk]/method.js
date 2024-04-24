import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Method() {
  return (
    <>
      <Head>
        <link rel="preload" href="/uk/images/method/step1b.jpg" as="image" />
        <link rel="preload" href="/uk/images/method/step2b.jpg" as="image" />
        <link rel="preload" href="/uk/images/method/step3b.jpg" as="image" />
        <link rel="preload" href="/uk/images/method/step4b.jpg" as="image" />
      </Head>

      <div className="text-center pt-20 px-10">
        <p className="uppercase oswald text-4xl ">
          <span className="pr-2 font-semibold">our</span>
          <span className="font-light">method</span>
        </p>

        <div className="flex justify-center ">
          <p className="font-light pt-4 max-w-[800px] tracking-tight">
            The expertise, research programs, and recommendations conducted by
            beScored Institute, ranging from device validation to material
            utilization, are aimed at companies wishing to observe real-world
            applications in the fields of sports, wellness, health, and
            business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex justify-center pt-10 gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="/images/method/step1.jpg"
              width={135}
              height={135}
              alt="etape"
              className="sm:pt-[55px] img1Method cursor-pointer"
            />
            <p className="font-semibold text-lg pt-5">Listen</p>
            <p className="pt-5 max-w-[135px] font-light">
              Gathering your expectations.
            </p>
          </div>

          <div className="hidden sm:block">
            <Image
              src="/images/method/img1.jpg"
              width={110}
              height={146}
              alt="methode"
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/method/step2.jpg"
              width={135}
              height={135}
              alt="etape"
              className="sm:pt-[22px] img2Method cursor-pointer"
            />
            <p className="font-semibold text-lg pt-5">
              <span>Build together</span>
            </p>
            <p className="pt-5 max-w-[135px] font-light">
              Together, we develop the best approach.
            </p>
          </div>

          <div className="hidden sm:block">
            <Image
              src="/images/method/arrow.jpg"
              width={110}
              height={146}
              alt="methode"
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/method/step3.jpg"
              width={135}
              height={135}
              alt="etape"
              className="sm:pt-[40px] img3Method cursor-pointer"
            />
            <p className="font-semibold text-lg pt-5">
              <span>Evaluate</span>
            </p>
            <p className="pt-5 max-w-[135px] font-light">
              A proven testing protocol.
            </p>
          </div>

          <div className="hidden sm:block">
            <Image
              src="/images/method/img2.jpg"
              width={110}
              height={146}
              alt="methode"
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/method/step4.jpg"
              width={135}
              height={135}
              alt="etape"
              className="sm:pt-[16px] img4Method cursor-pointer"
            />
            <p className="font-semibold text-lg pt-5">Report</p>
            <p className="pt-5 max-w-[135px] font-light">
              Our reports are clear and extremely detailed.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="btn btn-blue oswald">
            <Link href="/uk/contact">contactez us !</Link>
          </button>
        </div>
      </div>
    </>
  );
}
