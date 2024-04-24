import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Editorial() {
  return (
    <>
      <div className="pt-20 sm:pt-20 flex flex-col items-center justify-center">
        <div className="text-center px-10">
          <Fade
            direction="up"
            duration={1000}
            delay={1000}
            cascade
            damping={0.2}
            triggerOnce
          >
            <p className="font-semibold text-base uppercase blue">
              Performance and well-being accelerator
            </p>
            <p className="font-light text-4xl pt-4 oswald uppercase">
              We assess potentials, unveil benefits, <br />
              and optimize various recommendations.
            </p>
            <p className="font-sm font-light pt-4 max-w-2xl text-center mx-auto">
              Drawing upon over 30 years of experience in optimizing elite
              sports performance, beScored also offers this expertise in the
              realms of health, wellness, and business.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4 pt-20 px-6 sm:px-10">
          <div className="flex flex-col sm:flex-row text-justify sm:text-left justify-center items-center">
            <div className="p-6 flex-shrink-0">
              <Image
                src="/images/editorial1.jpg"
                alt="editorial"
                width={145}
                height={108}
              />
            </div>
            <div>
              <p className="font-semibold text-base uppercase blue pb-3 text-center sm:text-left">
                Health expertise
              </p>
              <span className="font-light">
                Our role is to assess various levels of fatigue comprehensively,
                whether it&apos;s implemented for surgeons or healthcare
                personnel. It&apos;s an opportunity to take care of those who
                take care of us!
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-justify sm:text-left justify-center items-center">
            <div className="p-6 flex-shrink-0">
              <Image
                src="/images/editorial2.jpg"
                alt="editorial"
                width={145}
                height={108}
              />
            </div>
            <div>
              <p className="font-semibold text-base uppercase blue pb-3 text-center sm:text-left">
                Sport expertise
              </p>
              <span className="font-light">
                We regularly work on optimizing the recovery phase in sports,
                aiming to prevent injuries. Evaluating the athlete and
                facilitating their recovery through appropriate devices or
                protocols is at the center of our daily considerations.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-justify sm:text-left justify-center items-center">
            <div className="p-6 flex-shrink-0">
              <Image
                src="/images/editorial3.jpg"
                alt="editorial"
                width={145}
                height={108}
              />
            </div>
            <div>
              <p className="font-semibold text-base uppercase blue pb-3 text-center sm:text-left">
                Wellness expertise
              </p>
              <span className="font-light">
                Strong themes have been emerging for us lately, such as
                improving sleep quality, increasing vitality by reducing stress,
                or enhancing our immune defenses through appropriate processes.
                Our team is committed to identifying sources of improvement in
                each area, an evident priority since the health crisis.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-justify sm:text-left justify-center items-center">
            <div className="p-6 flex-shrink-0">
              <Image
                src="/images/editorial4.jpg"
                alt="editorial"
                width={145}
                height={108}
              />
            </div>
            <div>
              <p className="font-semibold text-base uppercase blue pb-3 text-center sm:text-left">
                Corporate expertise
              </p>
              <span className="font-light">
                At times, the corporate world finds itself quite helpless when
                it comes to finding solutions to diagnose the often fragile
                mental health of their employees. Stemming from our research,
                our solutions offer diagnostics not only based on subjective
                assessments but primarily on objective data and
                easy-to-implement tests.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
