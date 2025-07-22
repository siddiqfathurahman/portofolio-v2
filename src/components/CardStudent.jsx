import { IoLocationSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-slate-100 flex justify-center py-10 font-poppins px-2">
        <div className="bg-slate-50 rounded-xl shadow-xl p-6 max-w-md md:max-w-xl w-full">
          <h1 className="text-blue-800 text-2xl font-bold mb-4">Education</h1>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="/smk2yk.jpeg"
              alt="SMKN 2 Yogyakarta"
              className="md:w-20 md:h-auto w-10 h-auto rounded-2xl shadow-md"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-bold md:text-lg text-sm">
                  SMKN 2 YOGYAKARTA
                </h1>
                <h2 className="text-gray-800 font-semibold text-xs md:text-sm">
                  2022 - 2026
                </h2>
              </div>
              <h3 className="text-gray-600 text-xs md:text-base">
                Sistem Informasi Jaringan dan Aplikasi
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationSharp className="md:text-2xl text-xl" />
            <h2 className="text-xs md:text-base">
              Kota Yogyakarta, Daerah Istimewa Yogyakarta
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
