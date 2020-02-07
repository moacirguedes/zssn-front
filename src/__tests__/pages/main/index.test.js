import React from 'react';
import Main from '../../../pages/main';
import * as SurvivorModel from '../../../model/survivor';
import { getSurvivorsFactory } from '../../factories/survivorFactory';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Main/>', () => {
  it('should render the table', async () => {
    SurvivorModel.getSurvivors =
      jest.fn().mockReturnValue(getSurvivorsFactory());

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Main />
      </Router>
    );

    const element = await waitForElement(
      () => getByTestId('survivors-table')
    );

    expect(element).toBeInTheDocument();
  });
});
