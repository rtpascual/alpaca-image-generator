import Alpaca from "./components/Alpaca";

function App() {
  return (
    <div className="flex flex-col justify-start text-center px-2 lg:px-40 h-screen">
      <header className="text-6xl font-bold text-sky-900 uppercase mb-6">
        <h1>Alpaca Generator</h1>
      </header>
      <Alpaca />
    </div>
  );
}

export default App;
