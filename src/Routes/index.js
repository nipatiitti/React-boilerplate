/**
 * The Main class for this application. Includes different routes and routing rules
 * Author: Niilo Jaakkola <niilo.jaakkola@tuni.fi>
 */

import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Topics from './Topics'
import Home from './Home'

const Main = () => (
    <Router>
        <Switch>
            <Route path="/topics" exact>
                <Topics />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
)

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Main)
