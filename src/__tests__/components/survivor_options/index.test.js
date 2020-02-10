import React from 'react';
import SurvivorOptions from '../../../components/survivor_options';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getSurvivorsFactory } from '../../factories/survivorFactory';

describe('<SurvivorOptions />', () => {
  it('should show a option correctly', async () => {
    const survivors = getSurvivorsFactory({infected: false});

    const { findByTestId } = render(
      <SurvivorOptions survivors={survivors.data} />
    );
    
    const option = await findByTestId('survivor-option');
    
    expect(option).toHaveTextContent(survivors.data[0].name);
  });
});
