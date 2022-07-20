/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:28:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Clients from "./pages/Users/Clients";
import Moto from "./pages/Users/Moto";
import MA from "./pages/Users/MA";

import NewUser from "./pages/Users/NewUser";
import Bookings from "./pages/Bookings/Bookings";
import UpdateBooking from "./pages/Bookings/UpdateBooking";
import BookingsByUser from "./pages/Bookings/BookingsByUser";

import Error from "./pages/Error/Error";

import AuthService from "./services/Auth.js";
import DashboardService from "./services/Dashboard.js";
import UsersService from "./services/Users.js";
import BookingsService from "./services/Bookings.js";
import Account from "./pages/Account/Account";
import AccountSusp from "./pages/Account/AccountSusp";
import AccountAct from "./pages/Account/AccountAct";
import ClientNot from "./pages/Bookings/clientNot";
import ClientOk from "./pages/Bookings/clientOk";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "Trebuchet MS",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Login {...props} logUserIn={AuthService} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} logUserIn={AuthService} />}
            />
            <Route exact path="/error">
              <Error />
            </Route>
            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <Dashboard {...props} dashboard={DashboardService} bookings={BookingsService}/>
              )}
            />
            <Route
              exact
              path="/clients"
              render={(props) => <Bookings {...props} bookings={BookingsService} />}
            />
            <Route
              exact
              path="/clients/nonAct"
              render={(props) => <ClientNot {...props} bookings={BookingsService} />}
            />
            <Route
              exact
              path="/clients/act"
              render={(props) => <ClientOk {...props} bookings={BookingsService} />}
            />
            <Route
              exact
              path="/comptes"
              render={(props) => <Account {...props} bookings={BookingsService} />}
            />
            <Route
              exact
              path="/comptes/activated"
              render={(props) => <AccountAct {...props} bookings={BookingsService} />}
            />
            <Route
              exact
              path="/comptes/suspended"
              render={(props) => <AccountSusp {...props} bookings={BookingsService} />}
            />
            
            
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
