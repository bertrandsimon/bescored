"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a CSS class to apply when scrollPosition is greater than or equal to 200
  const headerClass = scrollPosition >= 200 ? "nav-background" : "";

  return (
    <div className={`${headerClass}`}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 py-6">
              <div className="flex h-16 justify-between px-6">
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start z-10">
                  <div className="flex flex-shrink-0 items-center drop-shadow-md">
                    <Link href="/">
                      <Image
                        className="cursor-pointer"
                        src="/images/bescored-logo.png"
                        width={171}
                        height={44}
                        alt="BeScored"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-32 sm:flex sm:space-x-8 oswald text-white drop-shadow-md ">
                    <Link
                      href="/expertise"
                      className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                    >
                      Expertise
                    </Link>

                    <Link
                      href="/masak"
                      className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                    >
                      MASAK
                    </Link>

                    <Link
                      href="/team"
                      className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                    >
                      équipe
                    </Link>

                    <Link
                      href="/cases"
                      className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                    >
                      études de cas
                    </Link>

                    <Link
                      href="/news"
                      className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                    >
                      News
                    </Link>
                  </div>
                </div>

                <div className="sm:visible flex flex-col items-center justify-center z-10">
                  <button className="oswald bg-transparent hover:bg-black text-white uppercase text-sm hover:text-white hover:border-black py-2 px-4 border border-white hover:border-transparent">
                    <Link href="/contact">
                      <span>Contactez-nous !</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
