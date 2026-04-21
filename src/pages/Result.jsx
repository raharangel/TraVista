export default function Result({ data }) {
  return (
    <div className="max-w-xl w-full px-6">
      <h1 className="text-3xl mb-4">Your Best Plan</h1>

      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Curated {data.destination} Journey
        </h2>

        <p className="text-gray-500 mb-4">
          Budget: ${data.budget}
        </p>

        <ul className="space-y-2">
          <li>✔ Local experiences</li>
          <li>✔ Comfortable stay</li>
          <li>✔ Smart itinerary</li>
        </ul>
      </div>
    </div>
  );
}