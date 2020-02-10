import React from 'react';
import Reports from '../../../pages/reports';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as SurvivorModel from '../../../model/survivor';
import { getReportFactory } from '../../factories/survivorFactory';

describe('<Reports />', () => {
  it('should show total points lost', async () => {
    const response = getReportFactory('total_points_lost');

    SurvivorModel.getReportInfectedPoints =
      jest.fn().mockReturnValue(response);

    const { findByTestId } = render(<Reports />);

    const label = await waitForElement(
      () => findByTestId('total-poins-lost')
    );

    expect(label).toHaveTextContent(response.data.report.total_points_lost);
  });

  it('should show average itens per person', async () => {
    const response = getReportFactory('average_items_quantity_per_person');

    SurvivorModel.getReportPeopleInventory =
      jest.fn().mockReturnValue(response);

    const { findByTestId, debug } = render(<Reports />);

    const label = await waitForElement(
      () => findByTestId('avg-itens-per-person')
    );
    
    debug(label)

    expect(label).toHaveTextContent(
      'Total: ' + response.data.report.average_items_quantity_per_person
    );
  });

  it('should show average itens per healthy person', async () => {
    const response = getReportFactory('average_items_quantity_per_healthy_person');

    SurvivorModel.getReportPeopleInventory =
      jest.fn().mockReturnValue(response);

    const { findByTestId } = render(<Reports />);

    const label = await waitForElement(
      () => findByTestId('avg-itens-per-healthy-person')
    );

    expect(label).toHaveTextContent(
      'Non-infected: ' + response.data.report.average_items_quantity_per_healthy_person
    );
  });
});
