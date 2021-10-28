import { Detail } from "./components/Detail";
import { Home } from "./components/Home";
import { Route, Switch } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/det/:UPC" component={Detail} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
