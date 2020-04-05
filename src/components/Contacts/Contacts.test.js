import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contacts from './Contacts';

describe('<Contacts />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Contacts />);
    const contacts = getByTestId('Contacts');

    expect(contacts).toBeInTheDocument();
  });
});