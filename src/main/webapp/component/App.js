import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import HomePage from "./home/HomePage";

const App = () => {
    return (
        <div className="container">
            <section className="box">
                <div className="box-header"><h3>Service Checker</h3></div>
                <div className="box-content">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </section>
        </div>
    );
}

export default App;
