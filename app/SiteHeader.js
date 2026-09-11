"use client";

import { usePathname } from "next/navigation";
import FrToolBar from "./toolBar";
import FrNav from "./nav";
import FrNavMobile from "./navMobile";
import UkToolBar from "./[uk]/toolBar";
import UkNav from "./[uk]/nav";
import UkNavMobile from "./[uk]/navMobile";

export default function SiteHeader() {
  const pathname = usePathname();
  const isUk = pathname === "/uk" || pathname?.startsWith("/uk/");

  if (isUk) {
    return (
      <div className="z-20 sticky top-0">
        <UkToolBar />
        <div className="visible sm:hidden ">
          <UkNavMobile />
        </div>
        <UkNav className="z-12" />
      </div>
    );
  }

  return (
    <div className="z-20 sticky top-0">
      <FrToolBar />
      <div className="visible sm:hidden ">
        <FrNavMobile />
      </div>
      <FrNav className="z-12" />
    </div>
  );
}
