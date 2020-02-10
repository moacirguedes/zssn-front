import React from 'react';
import NewSurvivor from '../../../pages/new_survivor';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<NewSurvivor />', () => {
  it('should render the form', async () => {
    const { getByTestId } = render(<NewSurvivor />);

    const form = getByTestId('new-survivor-form');

    expect(form).toBeInTheDocument();
  });
});
