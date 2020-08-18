import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Board from "./components/board";
import Header from "./components/header";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
