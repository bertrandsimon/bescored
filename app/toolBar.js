"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import posts from "./datas/postsData";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function ToolBar() {
  return (
    <div className="h-14 bg-black flex items-center">
      <div className="flex items-center w-full justify-between px-8 gap-2 text-white">
        <div className="text-slate-400 text-xs justify-start items-center gap-2 h-96 w-1/2 hidden md:flex">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
          >
            {posts.map((post, key) => (
              <SwiperSlide key={key}>
                <Popover
                  placement="bottom"
                  showArrow={true}
                  classNames={{
                    base: "py-3 px-4 bg-white rounded-xl text-sm text-center mt-4 justify-start",
                    arrow: "bg-default-200",
                  }}
                >
                  <PopoverTrigger className="cursor-pointer hover:text-white">
                    {`${post.description.slice(0, 80)}...`}
                  </PopoverTrigger>

                  <PopoverContent>
                    <div className="px-1 py-2 w-96">
                      <div className="text-xs w-[96] text-justify">
                        {post.description}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-slate-400 text-xs flex justify-center items-center gap-2 mx-auto sm:mx-0">
          <span className="">
            <PhoneIcon className="h-3 w-3 text-gray-400" />
          </span>
          <span>
            <a href="0686584696" className="hover:text-white">
              Téléphone: +33 (0)6 86 58 46 93
            </a>
          </span>
          <span>|</span>
          <span className="">
            <EnvelopeIcon className="h-3 w-3 text-gray-400" />
          </span>
          <span>
            <a href="mailto:contact@bescored.fr" className="hover:text-white">
              contact@bescored.fr
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
