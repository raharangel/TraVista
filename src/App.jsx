import { useState } from "react";

import Landing from "./components/Landing";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Review from "./pages/Review";
import Result from "./pages/Result";

export default function App() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    destination: "",
    dates: "",
    budget: 2000,
    style: []
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F4]">
      {step === 0 && <Landing onStart={() => setStep(1)} />}
      {step === 1 && <Step1 data={data} setData={setData} next={() => setStep(2)} />}
      {step === 2 && <Step2 data={data} setData={setData} next={() => setStep(3)} />}
      {step === 3 && <Step3 data={data} setData={setData} next={() => setStep(4)} />}
      {step === 4 && <Review data={data} next={() => setStep(5)} />}
      {step === 5 && <Result data={data} />}
    </div>
  );
}