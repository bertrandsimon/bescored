import Image from "next/image";

export default function TopContent() {
  const indicators = [
    "Stress",
    "Qualité de sommeil",
    "Vitalité",
    "Fatigue mentale",
    "Charge cognitive",
    "Forme & Douleurs",
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-light text-5xl oswald uppercase">MASAK</p>
          <p className="font-semibold text-lg blue pt-3 uppercase tracking-wide">
            Mental And Stress Assessment Kit
          </p>
          <p className="font-light text-3xl sm:text-4xl pt-8 oswald uppercase max-w-4xl mx-auto">
            la première méthode d&apos;évaluation objective du bien-être mental
            et physique
          </p>
          <p className="font-semibold text-xl pt-4 oswald uppercase blue">
            Mesurez ce qui était jusqu&apos;ici uniquement ressenti&nbsp;!
          </p>
          <p className="font-light pt-8 max-w-3xl mx-auto text-center">
            &ldquo;En moins de 20 minutes, le MASAK réalise une cartographie
            complète et objective de votre état de bien-être mental et
            physique.&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-8 max-w-3xl mx-auto">
            {indicators.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#4DB4C4] text-[#4DB4C4] px-4 py-1.5 text-sm uppercase oswald"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="font-light pt-10 max-w-3xl mx-auto text-center">
            Le MASAK permet d&apos;accéder à une lecture fine, objective et
            multidimensionnelle de l&apos;état de bien-être de chacun, en
            s&apos;appuyant sur des indicateurs scientifiquement validés.
          </p>
        </div>
      </div>
    </div>
  );
}
