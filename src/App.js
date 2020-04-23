import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import Header from "./components/Header";
import Landing from "./css/Landing";
import './sass/_base.scss';


class App extends Component {


  render() {
    return (
      <div className="container" >
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
