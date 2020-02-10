import React from 'react';
import Row from '../../../components/row';
import { render, waitForElement, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getSurvivorFactory } from '../../factories/survivorFactory';
import { infectedStatusToString, extractProfileId } from '../../../model/survivor';

describe('<Row />', () => {
  describe('when rendered', () => {
    it('should show the survivor name', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const name = await waitForElement(
        () => getByText(survivor.data.name)
      );

      expect(name.textContent).toBe(survivor.data.name);
    });

    it('should show the survivor age', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const age = await waitForElement(
        () => getByText(survivor.data.age)
      );

      expect(age.textContent).toBe(survivor.data.age);
    });

    it('should show the survivor gender', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const gender = await waitForElement(
        () => getByText(survivor.data.gender)
      );

      expect(gender.textContent).toBe(survivor.data.gender);
    });

    it('should show the survivor location', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const location = await waitForElement(
        () => getByText(survivor.data.lonlat)
      );

      expect(location.textContent).toBe(survivor.data.lonlat);
    });

    it('should show the survivor infection status', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const infected = await waitForElement(
        () => getByText(
          infectedStatusToString(survivor.data.infected)
        )
      );

      expect(infected.textContent).toBe(
        infectedStatusToString(survivor.data.infected)
      );
    });
  });

  describe('when click on profile button', () => {
    it('should redirect to profile page', async () => {
      const survivor = getSurvivorFactory();
      const history = createMemoryHistory();

      const { getByTestId } = render(
        <Router history={history}>
          <Row survivor={survivor.data} />
        </Router>
      );

      const profileButton = await waitForElement(
        () => getByTestId('profile-button')
      );

      fireEvent.click(profileButton);

      expect(history.location.pathname).toBe(
        '/profile/' + extractProfileId(survivor.data.location)
      );
    });
  });
});
