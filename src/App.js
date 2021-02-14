import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homescreen from "./components/Homescreen";
import StartScreen from "./components/StartScreen";
import NavigationBar from "./components/NavigationBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <StartScreen />
          </Route>
          <Container>
            <Route path="/budget">
              <Homescreen />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
