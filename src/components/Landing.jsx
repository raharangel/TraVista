export default function Landing({ onStart }) {
  return (
    <div className="text-center max-w-2xl px-6">
      <h1 className="text-5xl font-bold mb-4">
        Plan your trip without the chaos
      </h1>

      <p className="text-gray-500 mb-8 text-lg">
        Answer a few questions and get one perfect plan.
      </p>

      <button
        onClick={onStart}
        className="bg-[#4F7D5C] text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition"
      >
        Design Your Trip →
      </button>

      <div className="mt-10 text-gray-400">
        <p>1. Answer → 2. Review → 3. Get Plan</p>
      </div>
    </div>
  );
}