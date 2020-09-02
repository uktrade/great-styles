import { configure, addDecorator, addParameters } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(loadStories, module)
});
