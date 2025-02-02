import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from './pages/AdminRoom';
import { Room } from './pages/Room';
import { LogOut } from './pages/LogOut';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="/logout" component={LogOut} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
