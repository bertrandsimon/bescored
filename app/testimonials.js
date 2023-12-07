"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <>
      <section className="py-24 sm:py-32 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center rounded-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <Swiper
            style={{ height: "700px" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            observer={true}
            observeParents={true}
            breakpoints={{
              // When window width is >= 320px
              320: {
                slidesPerView: 1,
                // spaceBetween: 20
              },
              // When window width is >= 480px
              480: {
                slidesPerView: 1,
                // spaceBetween: 30
              },
              // When window width is >= 640px
              640: {
                slidesPerView: 2,
                // spaceBetween: 40
              },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 border-gray-900/10">
                <Image
                  className="self-start"
                  src="/images/testimonials/jo.png"
                  alt="LPG"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between ">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900 ">
                    <p>
                      Christophe Hausswirth consacre sa vie au service des
                      sportifs et de la santé plus généralement ; d’abord comme
                      athlète de niveau international, mais surtout comme
                      chercheur avec qui j’ai eu le plaisir de travailler
                      l’INSEP. <br />
                      <br />
                      Il a donc ces deux qualités rares que sont la connaissance
                      de la pratique du haut-niveau et la rigueur scientifique
                      mise en œuvre pour y parvenir.
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/man2.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Dr. Philippe Le Van
                      </div>
                      <div className="mt-1 text-gray-500">
                        Directeur Médical (CMO) de Paris 2024
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/logos/16.png"
                  alt="Mouratoglou"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900">
                    <p>
                      “Un travail exceptionnel à la fois pour la mise en place
                      de protocoles de récupération, et pour le suivi
                      nutritionnel des athlètes.
                      <br />
                      <br />
                      Tout ce qui touche de près ou de loin à l’optimisation de
                      la performance est concerné. beScored est un interlocuteur
                      attentif qui apporte toutes les réponses à mes attentes et
                      à celles des sportifs.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/moura.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Patrick Mouratoglou
                      </div>
                      <div className="mt-1 text-gray-500">
                        Founder Mouratoglou Tennis Academy
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/testimonials/cerba.png"
                  alt="Cerballiance"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900">
                    <p>
                      La mise en place d&apos;un protocole d&apos;évaluation
                      avec Be Scored est toujours un moment
                      &quot;d&apos;excitation technologique&quot;. La rigueur
                      scientifique et le très large spectre de connaissance du
                      Dr. Hausswirth permettent d&apos;aborder la performance et
                      la récupération par tous les prismes. <br />
                      <br />
                      Merci Christophe d&apos;avoir sû intégré la justesse et la
                      précision de la mesure biologique dans ton approche
                      spécifique. Les plateformes techniques CERBALLIANCE sont
                      au service de Be Scored&quot;.
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/cerba-dg.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Dr. Vincent RAIMONDI
                      </div>
                      <div className="mt-1 text-gray-500">
                        DG de Cerballiance
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/testimonials/1.png"
                  alt="LPG"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between ">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900 ">
                    <p>
                      Nous travaillons aux côtés de beScored et son fondateur
                      depuis 2020 et la facilité d&apos;exécution des recherches
                      est remarquable. <br />
                      <br />
                      Je n&apos;ai jamais vu une société pouvant être aussi
                      précise dans la livraison des rapports, et
                      l&apos;accompagnement des domaines d&apos;application est
                      encore aujourd&apos;hui d&apos;un très grand soutien au
                      quotidien pour notre société. Nous sommes partis ensemble
                      pour plusieurs années de collaboration.
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/man.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Sammy Gharieni
                      </div>
                      <div className="mt-1 text-gray-500">Gharieni group</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
