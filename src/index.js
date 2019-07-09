import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, Route, browserHistory, Redirect } from "react-router";
import { Provider } from "react-redux";
import PageTemplate from "./containers/PageTemplate";
import reducers from "./reducers";
import Login from "./containers/login";
import Register from "./containers/register";
import Payments from "./containers/Payments";
import Income from "./containers/Income";
import Charts from "./containers/Charts";
import Settings from "./containers/Settings";
import NotFound from "./components/NotFound";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="/payments" />
      <Route component={PageTemplate}>
        <Route path="/payments" component={Payments} />
        <Route path="/income" component={Income} />
        <Route path="/charts" component={Charts} />
        <Route path="/settings" component={Settings} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
