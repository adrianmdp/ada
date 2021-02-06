import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo } from "./Screens/Ejemplo";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Ejemplo} />
      </Switch>
    </Router>
  );
};

export default App;
