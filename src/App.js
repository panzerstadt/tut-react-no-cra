// libraries
import React from "react";

// styles
import styles from "./App.module.css";

// components
import Page1 from "./components/pages/Page1";

const App = () => {
  return (
    <div className={styles.app}>
      <p>Hello world</p>
      <Page1 />
    </div>
  );
};

export default App;
