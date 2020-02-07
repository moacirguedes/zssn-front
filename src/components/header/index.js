import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () =>
  <header className="Header">
    <h1>Zombie Survival Social Network</h1>

    <div className="Header__wrapper">
      <Link className="Header__link" to="/">SURVIVOR LIST</Link>
      <Link className="Header__link" to="/create">CREATE SURVIVOR</Link>
      <Link className="Header__link" to="/">TRADE ITENS</Link>
      <Link className="Header__link" to="/report">REPORT INFECTED</Link>
      <Link className="Header__link" to="/reports">REPORTS</Link>
    </div>
  </header>

export default Header;
