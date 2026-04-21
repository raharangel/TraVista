import { useState } from "react";
import Landing from "./pages/Landing";
import StepBudget from "./pages/StepBudget";
import StepStyle from "./pages/StepStyle";
import StepDetails from "./pages/StepDetails";
import Review from "./pages/Review";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    budget: 3000,
    style: [],
    destination: "",
    dates: "",
  });

  return (
    <>
      {step === 0 && <Landing onStart={() => setStep(1)} />}
      {step === 1 && <StepBudget data={data} setData={setData} next={() => setStep(2)} />}
      {step === 2 && <StepStyle data={data} setData={setData} next={() => setStep(3)} />}
      {step === 3 && <StepDetails data={data} setData={setData} next={() => setStep(4)} />}
      {step === 4 && <Review data={data} next={() => setStep(5)} />}
      {step === 5 && <Result data={data} next={() => setStep(6)} />}
      {step === 6 && <Dashboard />}
    </>
  );
}