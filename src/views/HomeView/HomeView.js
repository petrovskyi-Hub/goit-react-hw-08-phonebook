import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome 👋</h1>
    <p className={styles.text}>
      Now you will exactly not forget your contacts!
    </p>
    <p className={styles.info}>
      Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!
    </p>
  </div>
);

export default HomeView;
