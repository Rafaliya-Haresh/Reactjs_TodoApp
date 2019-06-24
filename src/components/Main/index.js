import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';
import ItemCreator from '../ItemCreator';
import ItemsList from '../ItemsList';

import '../../app.css';

class Main extends Component {
  render() {
    return (
        <div className="app">
          <Header title="QGo Desktop React Assessment"/>
          <Link to="/home/haresh">Home</Link>
          <ItemCreator />
          <ItemsList />
        </div>
    );
  }
}

export default Main;
