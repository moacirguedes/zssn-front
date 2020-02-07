import React from 'react';
import Inventory from '../../../components/inventory';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { inventoryFactory } from '../../factories/survivorFactory';

describe('<Inventory />', () => {
  it('should show the amount of fiji water', async () => {
    const inventory = inventoryFactory('fijiWater');

    const { getByTestId } = render(
      <Inventory inventory={inventory} />
    );

    const fijiWaterLabel = await waitForElement(() => getByTestId('fijiWater'));

    expect(fijiWaterLabel).toHaveTextContent(
      `${inventory[0].item.name}: ${inventory[0].quantity}`
    );
  });

  it('should show the amount of campbell soup', async () => {
    const inventory = inventoryFactory('campbellSoup');

    const { getByTestId } = render(
      <Inventory inventory={inventory} />
    );

    const campbellSoupLabel = await waitForElement(() => getByTestId('campbellSoup'));

    expect(campbellSoupLabel).toHaveTextContent(
      `${inventory[0].item.name}: ${inventory[0].quantity}`
    );
  });

  it('should show the amount of first aid pouch', async () => {
    const inventory = inventoryFactory('firstAidPouch');

    const { getByTestId } = render(
      <Inventory inventory={inventory} />
    );

    const firstAidPouchLabel = await waitForElement(() => getByTestId('firstAidPouch'));

    expect(firstAidPouchLabel).toHaveTextContent(
      `${inventory[0].item.name}: ${inventory[0].quantity}`
    );
  });

  it('should show the amount of ak47', async () => {
    const inventory = inventoryFactory('ak47');

    const { getByTestId } = render(
      <Inventory inventory={inventory} />
    );

    const ak47Label = await waitForElement(() => getByTestId('ak47'));

    expect(ak47Label).toHaveTextContent(
      `${inventory[0].item.name}: ${inventory[0].quantity}`
    );
  });
});
