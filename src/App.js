import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import Favorite from "./pages/Favorite";
import NewMeetUp from "./pages/NewMeetup";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new">
          <NewMeetUp />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
