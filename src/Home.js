import Prodotti from "./Prodotti.js";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pords">
          <Prodotti />
        </div>
      </header>
    </div>
  );
}