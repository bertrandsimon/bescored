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
          <span className="pr-2 font-semibold">notre</span>
          <span className="font-light">méthode</span>
        </p>

        <div className="flex justify-center ">
          <p className="font-light pt-4 max-w-[800px] tracking-tight">
            Les expertises, les programmes de recherche et les recommandations
            men&eacute;s par beScored Institute, allant de la validation de
            dispositifs jusqu&rsquo;&agrave; l&rsquo;utilisation de
            mat&eacute;riel, s&rsquo;adressent aux entreprises d&eacute;sireuses
            d&rsquo;observer les r&eacute;elles applications dans le monde du
            sport, du bien-&ecirc;tre, de la sant&eacute; et de
            l&rsquo;entreprise.
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
            <p className="font-semibold text-lg pt-5">
              <span className="uppercase">é</span>
              <span>couter</span>
            </p>
            <p className="pt-5 max-w-[135px] font-light">
              Recueil de vos attentes.
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
              <span className="uppercase">é</span>
              <span>changer</span>
            </p>
            <p className="pt-5 max-w-[135px] font-light">
              Ensemble, élaborons la meilleure approche.
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
              <span className="uppercase">é</span>
              <span>valuer</span>
            </p>
            <p className="pt-5 max-w-[135px] font-light">
              Un protocole de test qui a fait ses preuves.
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
            <p className="font-semibold text-lg pt-5">Rapporter</p>
            <p className="pt-5 max-w-[135px] font-light">
              Nos rapports sont clairs et ultra détaillés.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="btn btn-blue oswald">
            <Link href="/uk/contact">contactez-nous !</Link>
          </button>
        </div>
      </div>
    </>
  );
}
