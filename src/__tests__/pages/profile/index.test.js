import React from 'react';
import Profile from '../../../pages/profile';
import * as SurvivorModel from '../../../model/survivor';
import { getSurvivorFactory } from '../../factories/survivorFactory';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Profile />', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const element = getByTestId('survivor-profile');

    expect(element).toBeInTheDocument();
  });

  it('should show the name of the survivor', async () => {
    const survivor = getSurvivorFactory();

    SurvivorModel.getSurvivor =
      jest.fn().mockReturnValue(survivor);

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const nameLabel = await waitForElement(() => getByTestId('name'));

    expect(nameLabel).toHaveTextContent(survivor.data.name);
  });

  it('should show the age of the survivor', async () => {
    const survivor = getSurvivorFactory();

    SurvivorModel.getSurvivor =
      jest.fn().mockReturnValue(survivor);

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const ageLabel = await waitForElement(() => getByTestId('age'));

    expect(ageLabel).toHaveTextContent(survivor.data.age);
  });

  it('should show the gender of the survivor', async () => {
    const survivor = getSurvivorFactory();

    SurvivorModel.getSurvivor =
      jest.fn().mockReturnValue(survivor);

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const genderLabel = await waitForElement(() => getByTestId('gender'));

    expect(genderLabel).toHaveTextContent(survivor.data.gender);
  });

  it('should show the location of the survivor', async () => {
    const survivor = getSurvivorFactory();

    SurvivorModel.getSurvivor =
      jest.fn().mockReturnValue(survivor);

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const lonlatLabel = await waitForElement(() => getByTestId('lonlat'));

    expect(lonlatLabel).toHaveTextContent(survivor.data.lonlat);
  });

  it('should show infection status', async () => {
    const survivor = getSurvivorFactory();

    SurvivorModel.getSurvivor =
      jest.fn().mockReturnValue(survivor);

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Profile match={{ params: { id: 1 } }} />
      </Router>
    );

    const infectedLabel = await waitForElement(() => getByTestId('infected'));

    expect(infectedLabel).toHaveTextContent(
      'Infected: ' + SurvivorModel.infectedStatusToString(survivor.data.infected)
    );
  });

  describe('when click on update button', () => {
    it('should redirect to update page', () => {
      const history = createMemoryHistory();

      const { getByTestId } = render(
        <Router history={history}>
          <Profile match={{ params: { id: 1 } }} />
        </Router>
      );

      const reportsButton = getByTestId('update-button');
      fireEvent.click(reportsButton);

      expect(history.location.pathname).toBe('/profile/1/update');
    });
  });
});
