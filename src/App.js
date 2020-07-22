import React from "react";
import Main from "./page/Main";
import Checkin from "./page/checkin";
import Booking from "./page/booking";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/checkin" component={Checkin} />
          <Route path="/booking" component={Booking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
