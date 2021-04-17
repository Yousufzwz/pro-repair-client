import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Customer/Order/Order';
import ServiceList from './Components/Customer/ServiceList/ServiceList';
import Review from './Components/Customer/Review/Review';
import User from './Components/Admin/User/User';
import AddService from './Components/Admin/AddService/AddService';
import MAkeAdmin from './Components/Admin/MakeAdmin/MAkeAdmin';
// import ServiceCard from './Components/Customer/ServiceCard/ServiceCard';
import PrivateRoute from './Components/Login/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import ManageServices from './Components/Admin/ManageServices/ManageServices';
import ProcessPayment from './Components/ProcessPayment/ProcessPayment';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route path='/home'>
                  <Home />
              </Route>
              <Route path='/login'>
                  <Login />
              </Route>
              <PrivateRoute path='/order'>
                  <Order />
              </PrivateRoute>
              <PrivateRoute path='/serviceOrder/:title'>
                  <Order />
              </PrivateRoute>
              <PrivateRoute path='/serviceList'>
                  <ServiceList />
              </PrivateRoute>
              <PrivateRoute path='/review'>
                  <Review />
              </PrivateRoute>
              <PrivateRoute path='/admin'>
                  <User />
              </PrivateRoute>
              <PrivateRoute path='/adminService'>
                  <User />
              </PrivateRoute>
              <PrivateRoute path='/addService'>
                  <AddService />
              </PrivateRoute>
              <PrivateRoute path='/makeAdmin'>
                  <MAkeAdmin />
              </PrivateRoute>
              <PrivateRoute path='/manageServices'>
                <ManageServices/>
              </PrivateRoute>
              <PrivateRoute path='payment'>
                  <ProcessPayment/>
              </PrivateRoute>
              <Route path='*'>
                    <NotFound />
              </Route>
          </Switch>
          
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;
