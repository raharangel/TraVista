import Progress from "../components/Progress";

const styles = ["Adventure", "Relaxation", "Cultural", "Food", "Nature"];

export default function StepStyle({ data, setData, next }) {

  const toggle = (item) => {
    if (data.style.includes(item)) {
      setData({ ...data, style: data.style.filter(i => i !== item) });
    } else {
      setData({ ...data, style: [...data.style, item] });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <Progress step={2} />

      <h2 className="text-xl mb-6">Select your travel style</h2>

      <div className="grid grid-cols-2 gap-4">
        {styles.map((item) => (
          <div
            key={item}
            onClick={() => toggle(item)}
            className={`p-6 rounded-xl border cursor-pointer ${
              data.style.includes(item)
                ? "bg-green-100 border-green-500"
                : "bg-white"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="mt-8 px-8 py-4 bg-green-600 text-white rounded-full"
      >
        Continue →
      </button>

    </div>
  );
}