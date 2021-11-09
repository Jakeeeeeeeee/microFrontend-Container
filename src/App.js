import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_DOGS_HOST: headerHost,
  REACT_APP_CATS_HOST: footerHost,
} = process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Dogs" />;
}

function Footer({ history }) {
  return <MicroFrontend history={history} host={footerHost} name="Cats" />;
}

function Home() {
  return (
    <div className="container">
       <div>
         <h1>Header and Footer</h1>
         <h4>This container includes the seperate Header and Footer</h4>
       </div>
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
