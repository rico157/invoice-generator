import Invoice from "./components/Invoice/Invoice";
import Navbar from "./components/Navbar";
import printDocument from "./utils/pdfUtils";

function App() {
  return (
    <div>
      <Navbar />
      <Invoice />
      <button onClick={printDocument} style={{ width: "3cm", height: "3cm" }}>
        Download
      </button>
    </div>
  );
}

export default App;
