import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInputGroup from './TextInputGroup';

describe('<TextInputGroup />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<TextInputGroup />);
    const textInputGroup = getByTestId('TextInputGroup');

    expect(textInputGroup).toBeInTheDocument();
  });
});