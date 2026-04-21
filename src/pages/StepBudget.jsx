import Progress from "../components/Progress";

export default function StepBudget({ data, setData, next }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <Progress step={1} />

      <h2 className="text-2xl font-semibold">What's your budget?</h2>

      <input
        type="range"
        min="500"
        max="10000"
        value={data.budget}
        onChange={(e) =>
          setData({ ...data, budget: e.target.value })
        }
        className="w-1/2 mt-6"
      />

      <p className="text-4xl mt-4">${data.budget}</p>

      <button
        onClick={next}
        className="mt-8 px-8 py-4 bg-green-600 text-white rounded-full"
      >
        Continue →
      </button>

    </div>
  );
}