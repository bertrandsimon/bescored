import Image from "next/image";

export default function Trio() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto justify-items-center gap-6">
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="mx-auto h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="/images/team/2.jpg"
                  alt=""
                  layout="responsive"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Dr. Geoffrey MILLOUR, PhD.
              </h3>
              <p className="text-base leading-7 text-gray-600">COO</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="mx-auto h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="/images/team/3.jpg"
                  alt=""
                  layout="responsive"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Dr. Alexandre COSTE, PhD
              </h3>
              <p className="text-base leading-7 text-gray-600">
                Research Project Manager
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="mx-auto h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="/images/team/4.jpg"
                  alt=""
                  layout="responsive"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Dr. Jacques GUENERON, MD.
              </h3>
              <p className="text-base leading-7 text-gray-600">Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
