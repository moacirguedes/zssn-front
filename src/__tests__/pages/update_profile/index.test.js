import React from 'react';
import UpdateProfile from '../../../pages/update_profile';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<UpdateProfile />', () => {
  it('should render the form', async () => {
    const { getByTestId } = render(
      <UpdateProfile
        match={{ params: { id: 1 } }}
      />
    );

    const form = getByTestId('update-survivor-form');

    expect(form).toBeInTheDocument();
  });
});
