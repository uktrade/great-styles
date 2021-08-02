import {addDecorator, addParameters} from "@storybook/react";
import {withA11y} from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/react";
import {withDsm} from "@invisionapp/dsm-storybook";
import "../src/scss/great-styles.scss";

addParameters({docs: {page: null}});
addDecorator(withA11y);
addDecorator(centered);
addDecorator(withDsm);

// Sort the stories and folders alphabetically (at the top level)
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, {numeric: true}),
  },
});
