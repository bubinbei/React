import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from '../Nav/Nav'
import Form from '../Form/Form'
import List from '../List/List'


function App() {
  return (
   <Router>
   <Nav />
   <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>

          <Route path="/form">
            <Form />
          </Route>

          <Route path="/list">
            <List />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
