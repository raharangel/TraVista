export default function Review({ data, next }) {
  return (
    <div className="max-w-xl w-full px-6">
      <h2 className="text-2xl mb-6">Review your preferences</h2>

      <div className="border rounded-xl p-4 space-y-2">
        <p><b>Destination:</b> {data.destination}</p>
        <p><b>Budget:</b> ${data.budget}</p>
        <p><b>Style:</b> {data.style.join(", ")}</p>
      </div>

      <button
        onClick={next}
        className="mt-6 w-full bg-[#4F7D5C] text-white py-4 rounded-full"
      >
        Find My Perfect Plan →
      </button>
    </div>
  );
}