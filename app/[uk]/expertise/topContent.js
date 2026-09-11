import Link from "next/link";
import {
  EyeDropperIcon,
  BoltIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function TopContent() {
  return (
    <div className="pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-semibold text-lg blue">
            Scientific Activities &amp; Expertise
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">
            beScored at the heart of human performance assessment
          </p>
          <p className="font-sm font-light pt-4 max-w-3xl mx-auto text-center">
            &ldquo;Our scientific approach is built on more than 30 years of
            experience in human performance assessment. Every study is tailored
            to the specific needs of our partners and conducted according to
            rigorous scientific protocols, ensuring reliable, actionable and
            meaningful results.&rdquo;
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <EyeDropperIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Healthcare Expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                We conduct clinical studies evaluating medical devices, as well
                as research projects investigating the physical and mental
                fatigue of healthcare professionals, including surgeons and
                nursing staff.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Wellness Expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                We design studies to assess the benefits of wellness
                interventions and care programs. Their effects are evaluated on
                key outcomes such as stress, sleep quality, mental fatigue and
                pain using a combination of scientifically validated objective
                and subjective measures.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Sports Expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                We develop and implement innovative research protocols to
                evaluate the impact of recovery strategies on athletic
                performance and injury prevention, including cryotherapy,
                compression therapy, far-infrared technologies, nutrition and
                hydration.
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center pt-16">
          <Link href="/uk/cases" className="btn btn-blue oswald cursor-pointer">
            Example of studies
          </Link>
        </div>
      </div>
    </div>
  );
}
