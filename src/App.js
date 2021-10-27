import Detail from "./components/Detail";
import Products from "./components/Products";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/det/:UPC" component={Detail} />
      <Route path="/" component={Products} />
    </Switch>
  );
}
