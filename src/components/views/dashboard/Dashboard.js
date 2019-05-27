import React from "react";
import { Consumer } from "../../AppProvider";
import Content from "./Content";

const Dashboard = () => <Consumer>
{
  (hocValues) => hocValues.state.currentUser ?
    <Content {...hocValues} /> :
    <div className="content">
      <h1>Access denied.</h1>
      <p>You are not authorized to access this page.</p>
    </div>
}
</Consumer>;

export default Dashboard;
