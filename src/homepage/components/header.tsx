import React from "react";

import styles from "./header.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={ styles.header }>
      <span className={ styles.myNameIs }>My name is</span>
      <h1>Isaac Sanchez Aguilar</h1>
    </header>
  )
};

export default Header;
