"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //console.log(form.current.telephone.value)

    emailjs
      .sendForm(
        "service_uvsxn6b",
        "template_4d95a3p",
        form.current,
        "NgT7PTAfnfr_bHXV2"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          console.log("erreur");
        }
      );
  };

  const navigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com/hausswirthc",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/bescored-institute/about/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M22.225 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.412 20.834H3.56V9H7.412v11.834zM5.486 7.967c-1.273 0-2.302-1.02-2.302-2.28 0-1.265 1.029-2.28 2.302-2.28s2.302 1.02 2.302 2.28c0 1.265-1.029 2.28-2.302 2.28zm15.352 12.867h-3.852V14.16c0-1.594-.568-2.682-1.989-2.682-1.082 0-1.727.726-2.01 1.424-.104.253-.13.607-.13.96v7.972h-3.852V9h3.852v1.606c.513-.789 1.432-1.918 3.477-1.918 2.541 0 4.454 1.662 4.454 5.236v6.91z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-2 sm:pt-24 lg:px-8 lg:pt-16">
          <div className="xl:grid xl:grid-cols-2 xl:gap-8">
            <div className="hidden lg:flex h-full w-full items-center justify-center sm:justify-between">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="flex flex-row gap-8">
                  <div>
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/uk/expertise"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Expertise
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/uk/team"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        team
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/uk/cases"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        studies
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/uk/news"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        News
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/uk/contact"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Contact
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <h3 className="font-normal leading-6 text-white text-center sm:text-left">
                We call you back
              </h3>
              <p className="mt-2 leading-6 text-gray-300  text-center sm:text-left">
                Get in touch with us for more information
              </p>

              {!success ? (
                <form
                  ref={form}
                  action="#"
                  onSubmit={sendEmail}
                  className="mt-6 sm:flex sm:max-w-md"
                >
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    required
                    className="w-full min-w-0 text-center appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#4DB4C4] sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                    placeholder="Téléphone"
                  />
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-[#4DB4C4] px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-[#4DB4C4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4DB4C4] uppercase"
                    >
                      Send
                    </button>
                  </div>
                </form>
              ) : (
                // success msg
                <div className="mt-6 flex justify-left items-center mx-auto text-white">
                  Merci, we&apos;ll get in touch.
                </div>
              )}
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 justify-center sm:justify-start md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 sm:text-left text-center">
              &copy; beScored 2023 |
              <span>
                {" "}
                Les Aqueducs B3 - 535 Route des Lucioles - 06560 Valbonne |
              </span>
              <span className="hover:text-white">
                <Link href="/uk/legal"> Legal notice</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
