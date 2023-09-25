'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
  return (
    <>

    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto px-8 py-6">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-blue-500">
                  <span className="absolute -inset-0.5" />
                  
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <Image
                className="w-auto"
                  src="/images/bescored-logo.png"
                  width={171}
                  height={44}
                  alt="BeScored"
                />
               
                </div>
                <div className="hidden sm:ml-32 sm:flex sm:space-x-8 oswald text-white">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-white px-1 pt-1 uppercase"
                  >
                    Expertise
                  </a>
                  <a
                    href="#"
                    className=" hvr-underline-from-center inline-flex items-center border-b-2 border-transparent px-1 pt-1 uppercase hover:border-gray-300 hover:text-white"
                  >
                    Equipe
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 uppercase hover:border-gray-300 hover:text-white"
                  >
                    Etudes de cas
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 uppercase hover:border-gray-300 hover:text-white"
                  >
                    News
                  </a>
                </div>
  
              </div>

             <div className='sm:visible flex flex-col items-center justify-center'>
                <button className="oswald bg-transparent hover:bg-black text-white uppercase text-sm hover:text-white hover:border-black py-2 px-4 border border-white hover:border-transparent">
                  <span>Contactez nous</span>
                </button>
             </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 oswald text-center">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block bg-indigo-50 py-2 pl-3 pr-4 uppercase"
              >
                Expertise
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase"
              >
                Equipe
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase"
              >
                Etudes de cas
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 uppercase"
              >
                News
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}
