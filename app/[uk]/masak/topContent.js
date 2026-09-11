export default function TopContent() {
  const indicators = [
    "Stress",
    "Sleep Quality",
    "Vitality",
    "Mental Fatigue",
    "Cognitive Load",
    "Physical Fitness & Pain",
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
            The first objective assessment method for mental and physical
            well-being
          </p>
          <p className="font-semibold text-xl pt-4 oswald uppercase blue">
            Measure what was previously only perceived!
          </p>
          <p className="font-light pt-8 max-w-3xl mx-auto text-center">
            &ldquo;In less than 20 minutes, MASAK provides a comprehensive and
            objective assessment of your mental and physical well-being.&rdquo;
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
            MASAK provides a detailed, objective and multidimensional
            assessment of individual well-being, based on scientifically
            validated indicators.
          </p>
        </div>
      </div>
    </div>
  );
}
