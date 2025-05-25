import heartImage from '../../assets/body-anatomy.png';

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-xl shadow p-4 relative flex justify-center">
      <img src={heartImage} alt="Human Anatomy" className="w-48 h-auto" />
      <div className="absolute top-8 right-4 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
        Healthy Heart
      </div>
      <div className="absolute bottom-8 left-4 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
        Healthy Leg
      </div>
    </div>
  );
}
