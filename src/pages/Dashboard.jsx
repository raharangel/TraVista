export default function Dashboard() {
  return (
    <div className="flex">

      <div className="w-64 h-screen bg-white shadow p-6">
        <h1 className="font-bold text-xl">TraVista</h1>
        <p className="mt-6">Home</p>
        <p>Planning</p>
      </div>

      <div className="flex-1 p-10">
        <h2 className="text-2xl font-semibold">
          Good Morning
        </h2>

        <div className="mt-6 bg-white p-6 rounded shadow">
          Ask: Plan a trip to Bali
        </div>
      </div>

    </div>
  );
}