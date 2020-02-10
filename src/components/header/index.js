import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () =>
  <header className="Header" data-testid="header">
    <h1 data-testid="title">Zombie Survival Social Network</h1>

    <div className="Header__wrapper">
      <Link
        data-testid="survivor-list-link"
        className="Header__link"
        to="/"
      >
        Survivor List
      </Link>

      <Link
        data-testid="create-survivor-link"
        className="Header__link"
        to="/create"
      >
        Create Survivor
      </Link>

      <Link
        data-testid="trade-itens-link"
        className="Header__link"
        to="/trade"
      >
        Trade Itens
      </Link>

      <Link
        data-testid="report-infected-link"
        className="Header__link"
        to="/report"
      >
        Report Infected
      </Link>

      <Link
        data-testid="reports-link"
        className="Header__link"
        to="/reports"
      >
        Reports
      </Link>
    </div>
  </header>

export default Header;
