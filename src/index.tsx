import React from "react";
import ReactDOM from "react-dom";

import styles from "./app.module.scss";

const App = () => (
  <h1 className={ styles.app }>
    My React and TypeScript App!!
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
