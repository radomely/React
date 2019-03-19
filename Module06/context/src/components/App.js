import React from "react";
import Localization from "../context/localization";
import Article from "./Article";
import LocaleSelector from "./LocaleSelector";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.container}>
    <Localization>
      <LocaleSelector />
      <Article />
    </Localization>
  </div>
);

export default App;
