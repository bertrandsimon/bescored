"use client";

import Image from "next/image";
import { Fragment } from "react";

import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavMobile() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-black">
        {({ open }) => (
          <>
            <div className="flex justify-center">
              <div className="flex h-16 justify-center">
                <div className="flex items-center justify-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-600 hover:text-white uppercase text-sm ">
                    <span className="absolute -inset-0.5" />

                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-4 pt-2 flex flex-col justify-center items-center">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-white uppercase text-sm hover:bg-gray-50  hover:text-black" */}
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 font-light text-white uppercase text-sm  hover:bg-gray-50 hover:text-black">
                  <Link href="/expertise">Expertise</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 font-light text-white uppercase text-sm  hover:bg-gray-50 hover:text-black">
                  <Link href="/masak">Masak</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 font-light text-white uppercase text-sm  hover:bg-gray-50 hover:text-black">
                  <Link href="/team">équipe</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 font-light text-white uppercase text-sm  hover:bg-gray-50 hover:text-black">
                  <Link href="/cases">études de cas</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 font-light text-white uppercase text-sm  hover:bg-gray-50 hover:text-black">
                  <Link href="/news">News</Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
