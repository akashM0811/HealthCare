import { Heart, Bone, Scan, ZoomIn } from "lucide-react";
import anatomyImg from "../../assets/body-anatomy.png";

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex justify-center items-center min-h-[450px] sm:min-h-[500px] relative overflow-hidden">
      <div className="relative w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]">
        <img src={anatomyImg} alt="Human Anatomy" className="w-full object-contain" />

        <div className="absolute top-[30%] right-[-3.5rem] sm:right-[-3.8rem] flex items-center gap-2 bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-md whitespace-nowrap">
          <Heart className="w-4 h-4 fill-current" />
          <span>Healthy Heart</span>
        </div>

        <div className="absolute top-[30%] right-[38%] translate-x-1">
          <Scan className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700" />
        </div>

        <div className="absolute bottom-[33%] left-[-2.5rem] sm:left-[-2rem] flex items-center gap-2 bg-cyan-400 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
          <Bone className="w-4 h-4 rotate-90" />
          <span>Healthy Leg</span>
        </div>

        <div className="absolute bottom-[33%] left-[38%] translate-x-1">
          <Scan className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
        </div>

        <div className="absolute top-2 right-[-2rem] sm:right-[-1.5rem] bg-white p-2 rounded-xl shadow-lg">
          <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
}
