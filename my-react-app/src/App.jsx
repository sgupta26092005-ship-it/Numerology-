import { useState } from "react";
import Header from "./Header";
import NameInput from "./NameInput";
import Buttons from "./Buttons";
import ResultBox from "./ResultBox";
import ChakraResult from "./ChakraResult";
import ConnectionResult from "./ConnectionResult";
import { calculateTotals } from "./numerology";

function App() {
  const [name, setName] = useState("");
  const [total, setTotal] = useState("-");
  const [freq, setFreq] = useState("-");
  const [chakra, setChakra] = useState("-");
  const [connection, setConnection] = useState("-");

  function handleCalculate() {
    const result = calculateTotals(name);
    setTotal(result.total);
    setFreq(result.freq);
    setChakra(result.chakra);
    setConnection(result.connection);
  }

  function handleReset() {
    setName("");
    setTotal("-");
    setFreq("-");
    setChakra("-");
    setConnection("-");
  }

  return (
    <div className="phone">
      <Header />
      <div className="content">
        <NameInput name={name} setName={setName} />
        <Buttons onCalc={handleCalculate} onReset={handleReset} />
        <ResultBox value={total} label="Pythagorean Total" />
        <ResultBox value={freq} label="Frequency Total" />
        <ChakraResult chakra={chakra} />
        <ConnectionResult meaning={connection} />
      </div>
      <div className="footer">Numerology • Frequency • Chakra</div>
    </div>
  );
}

export default App;
