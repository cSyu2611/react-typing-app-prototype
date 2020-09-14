import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import combinedReducer from "./store/combinedReducer";
import "./App.css";
import PageDescription from "./components/PageDescription";
import TypingDiv from "./components/TypingDiv";

// const store = createStore(combinedReducer, applyMiddleware());

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <PageDescription />
        <br />
        <TypingDiv />
      </div>
      // </Provider>
    );
  }
}

export default App;
