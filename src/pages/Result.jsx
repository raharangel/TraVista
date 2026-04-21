import { motion } from "framer-motion";

export default function Result({ data, next }) {
  return (
    <div className="min-h-screen bg-bgMain flex flex-col items-center px-6 py-16">

      {/* Status Badge */}
      <div className="bg-primarySoft text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
        ✨ Perfect Match Found
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-textMain mb-2">
        Your Best Plan
      </h1>

      <p className="text-textSoft mb-12 text-center max-w-xl">
        Based on your preferences, this plan offers the best experience
      </p>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white border border-borderSoft rounded-xl3 shadow-soft p-8 relative"
      >

        {/* Check Icon */}
        <div className="absolute top-6 right-6 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-lg">
          ✓
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-textMain mb-2">
          Curated {data.style[0] || "Travel"} Journey
        </h2>

        <p className="text-textSoft mb-6">
          ${data.budget} • 5 days
        </p>

        {/* Features */}
        <div className="space-y-3 text-textMain mb-6">
          <p>✔ Personalized itinerary</p>
          <p>✔ Premium stays</p>
          <p>✔ Local experiences</p>
          <p>✔ Smart scheduling</p>
        </div>

        {/* WHY BOX */}
        <div className="bg-bgMain p-5 rounded-xl2 text-textSoft text-sm mb-8">
          <p className="font-medium text-textMain mb-1">Why this plan?</p>
          <p>
            Balanced mix of exploration and comfort based on your preferences.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={next}
          className="w-full py-4 bg-primary text-white rounded-full font-medium hover:scale-[1.02] transition"
        >
          View Full Itinerary →
        </button>
      </motion.div>

      {/* SECONDARY OPTIONS */}
      <div className="w-full max-w-3xl mt-10 space-y-4">

        <div className="bg-white p-6 rounded-xl2 border border-borderSoft shadow-soft flex justify-between items-center">
          <div>
            <h3 className="font-medium text-textMain">Budget Explorer</h3>
            <p className="text-textSoft text-sm">$1200</p>
          </div>
          <span className="bg-primarySoft text-primary px-3 py-1 rounded-full text-sm">
            Save $650
          </span>
        </div>

        <div className="bg-white p-6 rounded-xl2 border border-borderSoft shadow-soft flex justify-between items-center">
          <div>
            <h3 className="font-medium text-textMain">Express Adventure</h3>
            <p className="text-textSoft text-sm">3 days</p>
          </div>
          <span className="bg-primarySoft text-primary px-3 py-1 rounded-full text-sm">
            Save 2 days
          </span>
        </div>

      </div>

    </div>
  );
}