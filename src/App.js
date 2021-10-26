import Dettaglio from "./components/Dettaglio";
import Prodotti from "./components/Prodotti";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/det/:UPC" component={Dettaglio}></Route>
      <Route exact path="/Progetto_1" component={Prodotti}></Route>
    </BrowserRouter>
  );
}

// <Router>
//   <Route exact path="/det/:UPC" component={Dettaglio} />
//   <Route exact path="/Progetto_1" component={Prodotti} />
// </Router>
