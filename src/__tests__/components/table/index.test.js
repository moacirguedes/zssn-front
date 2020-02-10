import React from 'react';
import Table from '../../../components/table';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getSurvivorsFactory } from '../../factories/survivorFactory';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Table />', () => {
  it('should load a survivor', async () => {
    const survivors = getSurvivorsFactory();
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Table survivors={survivors.data} />
      </Router>
    );

    const tableRow = await waitForElement(
      () => getByTestId('table-row')
    );

    expect(tableRow.childElementCount).toBe(6);
  });
});
