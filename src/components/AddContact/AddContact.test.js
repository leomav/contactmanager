import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddContact from './AddContact';

describe('<AddContact />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<AddContact />);
    const addContact = getByTestId('AddContact');

    expect(addContact).toBeInTheDocument();
  });
});