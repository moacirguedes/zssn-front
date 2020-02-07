import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () =>
  <header className="Header" data-testid="header">
    <h1 data-id="title">Zombie Survival Social Network</h1>

    <div className="Header__wrapper">
      <Link className="Header__link" to="/">Survivor List</Link>
      <Link className="Header__link" to="/create">Create Survivor</Link>
      <Link className="Header__link" to="/trade">Trade Itens</Link>
      <Link className="Header__link" to="/report">Report Infected</Link>
      <Link className="Header__link" to="/reports">Reports</Link>
    </div>
  </header>

export default Header;
