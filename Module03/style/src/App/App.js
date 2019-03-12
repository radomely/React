import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.App}>
          <header className={styles['App-header']}>
            <p></p>
            <a></a>
            <button className={`${styles.button} ${styles['button--big']}`}>Click Me</button>
          </header>
      </div>
    );
  }
}

export default App;
