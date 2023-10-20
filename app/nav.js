"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-8 py-6">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black-100 hover:text-blue-500">
                    <span className="absolute -inset-0.5" />

                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start z-10">
                  <div className="flex flex-shrink-0 items-center">
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
                  <div className="hidden sm:ml-32 sm:flex sm:space-x-8 oswald text-white">
                    <Link
                      href="/expertise"
                      className="inline-flex items-center px-1 pt-1 uppercase"
                    >
                      Expertise
                    </Link>

                    <Link
                      href="/team"
                      className="inline-flex items-center px-1 pt-1 uppercase"
                    >
                      équipe
                    </Link>

                    <Link
                      href="/cases"
                      className="inline-flex items-center px-1 pt-1 uppercase"
                    >
                      études de cas
                    </Link>

                    <Link
                      href="/news"
                      className="inline-flex items-center px-1 pt-1 uppercase"
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

            <Disclosure.Panel className="z-9000 sm:hidden">
              <div className="space-y-1 pb-40 pt-8 oswald text-center mx-auto flex flex-col items-center bg-[#4DB4C4]">
                <Disclosure.Button
                  href="/expertise"
                  className="block bg-indigo-50 py-2 pl-3 pr-4 uppercase rounded-md"
                >
                  Expertise
                </Disclosure.Button>
                <Disclosure.Button
                  href="/team"
                  className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase rounded-md"
                >
                  Equipe
                </Disclosure.Button>
                <Disclosure.Button
                  href="/cases"
                  className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase rounded-md"
                >
                  Etudes de cas
                </Disclosure.Button>
                <Disclosure.Button
                  href="/news"
                  className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase rounded-md"
                >
                  News
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
