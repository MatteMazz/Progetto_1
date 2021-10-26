import Dettaglio from "./components/Dettaglio";
import Prodotti from "./components/Prodotti";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "@mui/material";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/det/:UPC" component={Dettaglio} />
        <Route path="/progetto_1" component={Prodotti} />
      </Switch>
    </Router>
  );
}
