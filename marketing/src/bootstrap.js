import React from "react";
import ReactDOM from "react-dom";

// Mount func to start up the app
const mount = (ele) => {
  ReactDOM.render(<h1>hi</h1>, ele);
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
