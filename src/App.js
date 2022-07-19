import React from 'react';
import { Provider } from 'react-redux';
import { Contact } from './components/contacts/Contact';
import { Navbar } from './components/Navbar';
import store from './store';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { Addcontact } from './components/contacts/Addcontact';
import { Editcontact } from './components/contacts/Editcontact.js';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
     <Navbar/>
      <div className="container">
        <div className="py-3">
        <Switch>
          <Route exact path="/" component={Contact}/>
          <Route exact path="/contacts/add" component={Addcontact}/>
          <Route exact path="/contacts/edit/:id" component={Editcontact}/>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
