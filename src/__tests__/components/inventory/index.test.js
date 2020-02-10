import React from 'react';
import Inventory from '../../../components/inventory';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { inventoryFactory } from '../../factories/survivorFactory';

describe('<Inventory />', () => {
  it('should show the amount of an item', async () => {
    const inventory = inventoryFactory('fijiWater');

    const { getByTestId } = render(
      <Inventory inventory={inventory} />
    );

    const fijiWaterLabel = await waitForElement(() => getByTestId('fijiWater'));

    expect(fijiWaterLabel).toHaveTextContent(
      `${inventory[0].item.name}: ${inventory[0].quantity}`
    );
  });

  describe('when "showInput" is passed on props', () => {
    it('should show input', async () => {
      const inventory = inventoryFactory('fijiWater');

      const { getByTestId } = render(
        <Inventory inventory={inventory} showInput keys={[]} />
      );

      const itemInput = await waitForElement(() => getByTestId(inventory[0].location));

      expect(itemInput).toBeInTheDocument();
    });
  });
});
