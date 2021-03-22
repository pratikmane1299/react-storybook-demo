import React from 'react';

import { Title } from '../components/Title';

export default {
  title: 'Example/Title',
  component: Title,
};

export const Default = () => {
  return (
    <Title>
      This is my title.
    </Title>
  );
}

Default.bind({});
