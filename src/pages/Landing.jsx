export default function Landing({ onStart }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl font-bold">
        Plan your trip without the chaos
      </h1>

      <p className="text-gray-500 mt-4">
        Answer a few questions and get one perfect plan.
      </p>

      <button
        onClick={onStart}
        className="mt-8 px-8 py-4 bg-green-600 text-white rounded-full hover:scale-105 transition"
      >
        Design Your Trip →
      </button>

    </div>
  );
}