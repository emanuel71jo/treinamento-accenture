import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { WhoWeAre } from "../pages/WhoWeAre";
import { Products } from "../pages/Products";
import { Contacts } from "../pages/Contacts";

export function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whoweare" component={WhoWeAre} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/contacts" component={Contacts} />
    </Switch>
  );
}
