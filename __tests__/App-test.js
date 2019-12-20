/**
 * @format
 */

import 'react-native';
import 'jest-styled-components/native'

import React from 'react';
import App from '../src/Components/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(App).toMatchSnapshot()
});
