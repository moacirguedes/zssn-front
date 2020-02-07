import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../../../pages/main';

describe('<Main/>', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);

    expect(container).toBeInTheDocument();
  });

  // it('should load survivors', () => {
  //   const spyLoadSurvivors = jest.spyOn(Main.prototype, 'loadSurvivors');
  //   shallow(<Main />);

  //   expect(spyLoadSurvivors).toHaveBeenCalled();
  // });
});
