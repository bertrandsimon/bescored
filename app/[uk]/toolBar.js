"use client";

import { usePathname } from "next/navigation";

function toFrenchPath(pathname) {
  if (!pathname || pathname === "/uk" || pathname === "/uk/") return "/";
  if (pathname.startsWith("/uk/")) return pathname.slice(3) || "/";
  return "/";
}

export default function ToolBar() {
  const pathname = usePathname();

  return (
    <div className="h-14 bg-black flex items-center pl-10 pr-10">
      <div className="w-full flex justify-end">
        <a href={toFrenchPath(pathname)} className="text-slate-400 text-xs hover:text-white">
          Français
        </a>
      </div>
    </div>
  );
}
