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
            Kit d’évaluation de la santé mentale positive
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">MASAK</p>
          <p className="font-sm font-extralight pt-4 max-w-xl mx-auto text-center">
            Une solution tout-en-un pour évaluer l’état mental, les niveaux de
            douleurs et de stress, ainsi que la qualité de sommeil des
            personnes.
          </p>
        </div>
      </div>
    </div>
  );
}
