import Dettaglio from "./components/Dettaglio";
import Prodotti from "./components/Prodotti";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/det/:UPC" component={Dettaglio} />
      <Route path="/" component={Prodotti} />
    </Switch>
  );
}
