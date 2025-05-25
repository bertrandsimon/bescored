import Image from "next/image";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  EyeDropperIcon,
  BuildingOfficeIcon,
  BoltIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function TopContent() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-semibold text-lg blue">
          Positive Mental Health Assessment Kit
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">MASAK</p>
          <p className="font-sm font-extralight pt-4 max-w-xl mx-auto text-center">
          An all-in-one solution to assess individuals mental state, pain and stress levels, as well as sleep quality.
          </p>
        </div>
      </div>
    </div>
  );
}
