import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount func to start up the app
const mount = (ele) => {
  ReactDOM.render(<App />, ele);
};

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// lastly export
export { mount };
