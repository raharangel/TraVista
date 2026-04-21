import Progress from "../components/Progress";

export default function StepDetails({ data, setData, next }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <Progress step={3} />

      <h2 className="text-xl mb-6">Destination & Date</h2>

      <input
        placeholder="Destination"
        className="border p-3 rounded mb-4"
        onChange={(e) =>
          setData({ ...data, destination: e.target.value })
        }
      />

      <input
        type="date"
        className="border p-3 rounded mb-4"
        onChange={(e) =>
          setData({ ...data, dates: e.target.value })
        }
      />

      <button
        onClick={next}
        className="mt-6 px-8 py-4 bg-green-600 text-white rounded-full"
      >
        Continue →
      </button>

    </div>
  );
}