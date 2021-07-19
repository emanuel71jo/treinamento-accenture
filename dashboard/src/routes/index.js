import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { AppLayout, PageLayout } from "./styles";
import NavBar from "../components/NavBar";

function Routes() {
  return (
    <AppLayout>
      <NavBar />
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect from="*" to={NotFound} />
        </Switch>
      </PageLayout>
    </AppLayout>
  );
}

export default Routes;
