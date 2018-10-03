import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthZeroService from '../../services/AuthZeroService';
import Auth from '../Auth';
import Callback from '../Callback';
import Unauthorised from '../Unauthorised';
import Layout from '../Layout';
import Companies from '../Companies';

class App extends Component {
  render() {
    const azs = new AuthZeroService();
    return (
      <Switch>
        <Route exact path="/" render={(props) => (
          <Auth {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout} title="Welcome" description="Welcome to the BlockDJ Company Management Admin">
              <p>Home</p>
            </Layout>
          </Auth>)}
        />
        <Route exact path="/companies" render={(props) => (
          <Auth {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout} title="Companies" description="The companies currently setup for you to manage">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Companies />                
                  </div>
                </div>
              </div>
            </Layout>
          </Auth>
        )}/>
        <Route exact path="/offers" render={(props) => (
          <Auth {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout} title="Offers" description="The offers currently setup for you to manage">
            </Layout>
          </Auth>
        )}/>
        <Route exact path="/playlists" render={(props) => (
          <Auth {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout} title="Playlists" description="The playlists currently setup for you to manage">
            </Layout>
          </Auth>
        )}/>        
        <Route exact path="/callback" render={(props) => {
          return <Callback {...props} handleAuthentication={azs.handleAuthentication} />
        }} />
        <Route exact path="/unauthorised" render={(props) => {
          return <Unauthorised {...props} logout={azs.logout} />
        }} />
      </Switch>
    )
  }
}

export default App;
