import { action, storiesOf } from '@kadira/storybook';

import React from 'react'

storiesOf('div', module)
  .add('with text', () => (
    <div onClick={action('clicked')}>Hello Div</div>
  ))
  .add('with some emoji', () => (
    <div onClick={action('clicked')}>😀 😎 👍 💯</div>
  ));
