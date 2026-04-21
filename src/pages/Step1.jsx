export default function Step1({ data, setData, next }) {
  const cities = ["Tokyo", "Paris", "Bali", "New York"];

  return (
    <div className="w-full max-w-xl px-6">
      <h2 className="text-2xl mb-4">Where do you want to go?</h2>

      <input
        placeholder="Enter destination"
        className="w-full p-4 rounded-xl border mb-4"
        onChange={(e) =>
          setData({ ...data, destination: e.target.value })
        }
      />

      <div className="flex gap-2 flex-wrap mb-6">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setData({ ...data, destination: c })}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            {c}
          </button>
        ))}
      </div>

      <button
        onClick={next}
        className="w-full bg-[#4F7D5C] text-white py-4 rounded-full"
      >
        Continue →
      </button>
    </div>
  );
}
