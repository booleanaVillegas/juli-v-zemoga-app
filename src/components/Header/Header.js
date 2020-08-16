import React from 'react';
import './Header.scss';

const Header = () => {
    return (<header>
        <span   >
          <a className="header__logo" href="/">Rule of Thumb.</a>
        </span>
        <nav className="nav-container">
          <ul>
            <li><a className="nav__link" href="/">Past trials</a></li>
            <li><a className="nav__link" href="/">How it works?</a></li>
            <li><a className="nav__link" href="/">Log-In / Sign-Up</a></li>
          </ul>
        </nav>
      </header>  );
}
 
export default Header;