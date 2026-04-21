export default function Progress({ step }) {
  return (
    <div className="flex gap-3 justify-center mb-8">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`h-2 w-20 rounded-full ${
            step >= s ? "bg-green-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}