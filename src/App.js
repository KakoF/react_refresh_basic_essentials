import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import Favorite from './pages/Favorite';
import NewMeetUp from './pages/NewMeetup';
function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new'>
        <NewMeetUp />
      </Route>
      <Route path='/favorite'>
        <Favorite />
      </Route>
    </Switch>
  </div>;
}

export default App;
