export default function Review({ data, next }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">

      <h2 className="text-2xl mb-6">Review</h2>

      <p>Budget: ${data.budget}</p>
      <p>Style: {data.style.join(", ")}</p>
      <p>Destination: {data.destination}</p>

      <button
        onClick={next}
        className="mt-6 px-8 py-4 bg-green-600 text-white rounded-full"
      >
        Generate →
      </button>

    </div>
  );
}