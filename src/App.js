import Dettaglio from "./components/Dettaglio";
import Prodotti from "./components/Prodotti";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Prodotti} />
      <Route exact path="/det/:UPC" component={Dettaglio} />
    </Router>
  );
}
