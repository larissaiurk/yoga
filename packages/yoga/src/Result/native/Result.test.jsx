import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Result } from '../..';

describe('<Result />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Result />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});