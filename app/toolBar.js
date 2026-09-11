"use client";

import { usePathname } from "next/navigation";

function toEnglishPath(pathname) {
  if (!pathname || pathname === "/") return "/uk";
  return `/uk${pathname}`;
}

export default function ToolBar() {
  const pathname = usePathname();

  return (
    <div className="h-14 bg-black flex items-center pl-10 pr-10">
      <div className="w-full flex justify-end">
        <a href={toEnglishPath(pathname)} className="text-slate-400 text-xs hover:text-white">
          English
        </a>
      </div>
    </div>
  );
}
