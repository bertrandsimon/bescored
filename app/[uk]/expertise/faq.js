import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Faq() {
  const faqs = [
    {
      question: "How do I know if my device brings benefits?",
      answer:
        "We are here to help you organize the necessary evaluation programs and implement all the tools to best describe any potential benefits.",
    },
    {
      question: "What is the minimum time for an evaluation or research?",
      answer:
        "At the protocol validation stage, it takes about 3 to 4 months to conduct the various tests in real-life situations.",
    },
    {
      question: "When can I receive a complete report with the results?",
      answer:
        "In most cases, we never exceed the overall study or evaluation duration to deliver our report, which is usually around 3 months.",
    },
    {
      question: "Is the final report delivered in multiple languages?",
      answer:
        "It is provided in French by default, but it is also often done in English upon request.",
    },
    {
      question:
        "Do you help companies interpret the results from your tests or research?",
      answer:
        "Yes, we are here to support you even beyond the simple results related to our evaluation.",
    },
    {
      question:
        "Is it possible to conduct simple tests initially to target our hypotheses and direct the benefits related to our product?",
      answer: "This is entirely possible and often recommended.",
    },
    {
      question:
        "Is it possible to conduct mental health tests in my company with over 100 employees and how long does it take?",
      answer:
        "We have a mobile evaluation unit and we are able to travel to assess the mental health of your employees. For 100 employees, it will take about 3 days on site.",
    },
    {
      question:
        "I have a product to test in the sports industry: do you handle athlete recruitment?",
      answer:
        "Yes, we handle recruitment and pre-selection based on specific criteria and in agreement with your product and its requirements.",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl pb-40">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <p className="uppercase oswald text-4xl text-white text-center">
            <span className="pr-2 font-semibold">Fréquently</span>
            <span className="font-light">Asked Questions</span>
          </p>

          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
