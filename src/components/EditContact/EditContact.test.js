import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditContact from './EditContact';

describe('<EditContact />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<EditContact />);
    const editContact = getByTestId('EditContact');

    expect(editContact).toBeInTheDocument();
  });
});