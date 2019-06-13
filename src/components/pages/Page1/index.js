import React from "react";

import styles from "./index.module.css";

const List = () => {
  return (
    <div className={styles.container}>
      <p>list page</p>
      <ol className={styles.list}>
        <li>hey</li>
        <li>ho</li>
      </ol>
    </div>
  );
};

export default List;
