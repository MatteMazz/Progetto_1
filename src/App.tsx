import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "./data/Data";

export const App: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Switch>
      <Route path="/det/:UPC">
        <Detail data={data} />
      </Route>
      <Route path="/">
        <Home data={data}></Home>
      </Route>
    </Switch>
  );
};
