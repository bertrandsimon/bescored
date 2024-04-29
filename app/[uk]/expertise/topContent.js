import Image from "next/image";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  EyeDropperIcon,
  BuildingOfficeIcon,
  BoltIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function TopContent() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-semibold text-lg blue">
            Scientific activities and expertise
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">
            beScored positions itself at the heart <br /> of human performance
            factors
          </p>
          <p className="font-sm font-extralight pt-4 max-w-xl mx-auto text-center">
            The expertise and research programs conducted by beScored, ranging
            from device validation to equipment utilization, are aimed at
            companies interested in observing their real-world applications in
            the fields of sports, wellness, and health.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <EyeDropperIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Health expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration with : </span>
                  <span className="font-semibold pl-2">JOHNSON & JOHNSON</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Main objective :</span>
                  <span>
                    To measure the fatigue levels of orthopedic surgeons using
                    automated or conventional devices.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Achievements :</span>
                  <span>
                    Cognitive and physical fatigue are reduced by the use of an
                    automated system in hip arthroplasty.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Wellness expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration with : </span>
                  <span className="font-semibold pl-2">LPG Medical</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Main objective :</span>
                  <span>
                    To propose a care program that improves sleep quality,
                    reduces stress, and boosts immune defenses.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Achievements :</span>
                  <span>
                    At the end of a 10-session program, participants experience
                    less fragmented sleep and remain more immobile during sleep.
                    Stress is reduced, and vitality is increased in the
                    experimental group compared to the Placebo group.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Sport expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration with : </span>
                  <span className="font-semibold pl-2"> INFRACAB’IN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Main objective :</span>
                  <span>
                    To promote an improvement in sports recovery through the
                    regular use of a state-of-the-art infrared device.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Achievements :</span>
                  <span>
                    At the end of an exercise generating strong muscle soreness,
                    strength and relaxation parameters are less affected when
                    athletes undergo daily recovery in infrared sauna.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BuildingOfficeIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Corporate expertise
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration with : </span>
                  <span className="font-semibold pl-2">CERBALLIANCE</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Main objective :</span>
                  <span>
                    To implement a mental health assessment in the company to
                    target areas for improvement.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">Achievements :</span>
                  <span>
                    Mental fatigue is one of the most relevant parameters to
                    consider for the well-being of employees in a company. We
                    are now able to provide an objective score to this often
                    subjective concept.
                  </span>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
