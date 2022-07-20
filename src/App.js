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
              path="/new-user"
              render={(props) => <NewUser {...props} users={UsersService} />}
            />
            <Route
              exact
              path="/clients"
              render={(props) => <Bookings {...props} bookings={BookingsService} />}
            />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
