import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homescreen from "./components/Homescreen";
import StartScreen from "./components/StartScreen";
import NavigationBar from "./components/NavigationBar";
import { Container } from "react-bootstrap";
import HistoricalData from "./components/HistoricalData";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Container>
            <Route path="/history">
              <HistoricalData />
            </Route>
            <Route path="/budget">
              <Homescreen />
            </Route>
            <Route path="/" exact>
              <StartScreen />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
