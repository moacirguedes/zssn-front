import React from 'react';
import Header from '../../../components/header';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Header />', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const header = getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  describe('when click', () => {
    describe('on survivor list button', () => {
      it('should redirect to main page', () => {
        const history = createMemoryHistory();
        history.push('/create');

        const { getByTestId } = render(
          <Router history={history}>
            <Header />
          </Router>
        );

        const survivorListButton = getByTestId('survivor-list-link');
        fireEvent.click(survivorListButton);

        expect(history.location.pathname).toBe('/');
      });
    });

    describe('on create survivor button', () => {
      it('should redirect to create survivor page', () => {
        const history = createMemoryHistory();

        const { getByTestId } = render(
          <Router history={history}>
            <Header />
          </Router>
        );

        const createSurvivorButton = getByTestId('create-survivor-link');
        fireEvent.click(createSurvivorButton);

        expect(history.location.pathname).toBe('/create');
      });
    });

    describe('on trade itens button', () => {
      it('should redirect to trade itens page', () => {
        const history = createMemoryHistory();

        const { getByTestId } = render(
          <Router history={history}>
            <Header />
          </Router>
        );

        const tradeItensButton = getByTestId('trade-itens-link');
        fireEvent.click(tradeItensButton);

        expect(history.location.pathname).toBe('/trade');
      });
    });

    describe('on report infected button', () => {
      it('should redirect to report infected page', () => {
        const history = createMemoryHistory();

        const { getByTestId } = render(
          <Router history={history}>
            <Header />
          </Router>
        );

        const reportInfectedButton = getByTestId('report-infected-link');
        fireEvent.click(reportInfectedButton);

        expect(history.location.pathname).toBe('/report');
      });
    });

    describe('on report infected button', () => {
      it('should redirect to report infected page', () => {
        const history = createMemoryHistory();

        const { getByTestId } = render(
          <Router history={history}>
            <Header />
          </Router>
        );

        const reportsButton = getByTestId('reports-link');
        fireEvent.click(reportsButton);

        expect(history.location.pathname).toBe('/reports');
      });
    });
  });
});
