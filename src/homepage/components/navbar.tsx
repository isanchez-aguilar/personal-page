import React from "react";

import styles from "./navbar.module.scss";

const options = [
  "Who am I?",
  "Work experience",
  "Projects",
  "Skills",
  "Awards",
  "Contact",
];

const NavbarOptions = (): JSX.Element => {
  return (
    <ul>
      {
        options.map((option, index) => {
          return (
            <li key={ index }>
              <span className={ index === 0?styles.activeOption:"" }>
                { option }
              </span>
            </li>
          );
        })
      } 
    </ul>
  );
};

const Navbar = (): JSX.Element => {
  return (
    <nav className={ styles.navbar }>
      <NavbarOptions /> 
    </nav>
  );
};

export default Navbar;
