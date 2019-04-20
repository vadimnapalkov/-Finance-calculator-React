import React from "react";
import { Link, withRouter } from "react-router";

export const MainMenu = () => (
  <div id="panel">
    <div>
      <Link to="/payments" activeClassName="selected">
        Payments
      </Link>
    </div>
    <div>
      <Link to="/income" activeClassName="selected">
        Income
      </Link>
    </div>
    <div>
      <Link to="/charts" activeClassName="selected">
        Charts
      </Link>
    </div>
    <div>
      <Link to="/settings" activeClassName="selected">
        Settings
      </Link>
    </div>
  </div>
);

export default withRouter(MainMenu);
