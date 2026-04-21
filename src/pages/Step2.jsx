export default function Step2({ data, setData, next }) {
  return (
    <div className="max-w-xl w-full px-6 text-center">
      <h2 className="text-2xl mb-6">What's your budget?</h2>

      <h1 className="text-5xl mb-6">${data.budget}</h1>

      <input
        type="range"
        min="500"
        max="10000"
        value={data.budget}
        onChange={(e) =>
          setData({ ...data, budget: Number(e.target.value) })
        }
        className="w-full"
      />

      <button
        onClick={next}
        className="mt-8 w-full bg-[#4F7D5C] text-white py-4 rounded-full"
      >
        Continue →
      </button>
    </div>
  );
}