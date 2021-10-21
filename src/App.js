import "./App.css";
import Dettaglio from "./Dettaglio.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/det/:id" component={Dettaglio} />
    </Router>
  );
}
