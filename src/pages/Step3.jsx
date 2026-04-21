export default function Step3({ data, setData, next }) {
  const styles = ["Adventure", "Relaxation", "Cultural", "Food", "Nature"];

  const toggle = (s) => {
    let updated = data.style.includes(s)
      ? data.style.filter((i) => i !== s)
      : [...data.style, s];

    setData({ ...data, style: updated });
  };

  return (
    <div className="max-w-xl w-full px-6">
      <h2 className="text-2xl mb-4">Travel style</h2>

      <div className="grid grid-cols-2 gap-4">
        {styles.map((s) => (
          <button
            key={s}
            onClick={() => toggle(s)}
            className={`p-4 rounded-xl border ${
              data.style.includes(s)
                ? "bg-[#4F7D5C] text-white"
                : ""
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={next}
        className="mt-6 w-full bg-[#4F7D5C] text-white py-4 rounded-full"
      >
        Continue →
      </button>
    </div>
  );
}