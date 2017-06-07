import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: tests renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
