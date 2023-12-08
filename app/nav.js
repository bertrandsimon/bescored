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
                  <div className="hidden sm:ml-32 sm:flex sm:space-x-8 oswald text-white drop-shadow-md">
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
          </>
        )}
      </Disclosure>
    </>
  );
}
