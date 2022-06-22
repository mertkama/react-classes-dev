import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Hooks from "./pages/hooks";
import Classes from "./pages/classes";


export class App extends Component {
    render() {
        return (
            <Router>
                <div style={{ marginBottom: "70px" }}>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/hooks">
                            <Hooks />
                        </Route>
                        <Route path="/class">
                            <Classes />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
