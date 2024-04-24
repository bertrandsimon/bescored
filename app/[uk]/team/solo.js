import Image from "next/image";

export default function Solo() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="uppercase oswald text-4xl ">
            <span className="pr-2 font-semibold">notre</span>
            <span className="font-light">équipe</span>
          </p>

          <p className="mt-6 text-light">
            Des experts à votre écoute pour vous accompagner dans vos projets.
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
            Au cours de ses 20 années passées à l’INSEP en tant que chercheur et
            Directeur du Département de la Recherche et fort de six olympiades,
            Christophe HAUSSWIRTH a développé une expertise dans le sport de
            haut niveau qu’il met aujourd’hui à profit dans beScored Institute.
            En parallèle, Christophe Hausswirth a réalisé 7 ouvrages de
            référence dont « Améliorer sa Récupération en Sport » ou « Nutrition
            et Performance en Sport ». Il possède également une liste élargie de
            plus de 150 publications scientifiques pour des revues spécialisées
            à impact scientifique élevé. Il a écrit 18 chapitres d’ouvrages sur
            invitation et est aussi intervenu dans près de 180 conférences et
            séminaires en France et à l’international sur la physiologie et
            l’entraînement sportif, ainsi que sur la santé et le bien-être de
            l’individu. De plus, il est actuellement chercheur et membre associé
            au LAMHESS (Université Côte d’azur) et Professeur à l’Université
            technologique de Sydney (UTS).
          </p>
        </div>
      </div>
    </div>
  );
}
