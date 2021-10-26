import Dettaglio from "./components/Dettaglio";
import Prodotti from "./components/Prodotti";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/progetto_1/det/:UPC" component={Dettaglio} />
        <Route path="/progetto_1" component={Prodotti} />
      </Switch>
    </Router>
  );
}
