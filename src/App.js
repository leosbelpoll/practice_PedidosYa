import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

import Dashboard from "./components/Dashboard";
import RestaurantList from "./components/Restaurant/List";
import RestaurantDetail from "./components/Restaurant/Detail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/restaurants" component={RestaurantList}/>
                    <Route exact path="/restaurants/:id" component={RestaurantDetail}/>

                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
