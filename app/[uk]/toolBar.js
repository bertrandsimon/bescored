"use client";

import Link from "next/link";

export default function ToolBar() {
  return (
    <div className="h-14 bg-black flex items-center pl-10 pr-10">
      <div className="w-full flex justify-end">
        <Link href="/" className="text-slate-400 text-xs hover:text-white">
          Français
        </Link>
      </div>
    </div>
  );
}
