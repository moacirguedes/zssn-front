import React from 'react';
import App from '../App';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<App/>', () => {
  it('should render correctly', () => {
    const { container } = render(<App />);
    
    expect(container).toBeInTheDocument();
  });
});
