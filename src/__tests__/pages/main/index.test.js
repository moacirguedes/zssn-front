import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../../../pages/main';
import * as SurvivorModel from '../../../model/survivor';
import { survivor } from '../../factories/survivorFactory';

describe('<Main/>', () => {
  it('should render the table', () => {
    SurvivorModel.getSurvivors = jest.fn().mockReturnValue(survivor);
    
    const { getByTestId } = render(<Main />);

    const element = getByTestId('survivors-table');
    
    expect(element).toBeInTheDocument();
  });
});
