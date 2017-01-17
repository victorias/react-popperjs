import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';

import Text from './Text';
import Popper from '../src/Popper/Popper';
import Tooltip from '../src/Tooltip/Tooltip';

import { Placements } from '../src/types';

addDecorator(centered);

storiesOf('Popper', module)
  .add('bottom', () => (
    <Popper
      popoutComponent={"popped out"}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Popper>
  ))
  .add('top', () => (
    <Popper
      popoutComponent={"popped out"}
      placement={Placements.TOP}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Popper>
  ))
  .add('left', () => (
    <Popper
      popoutComponent={"popped out"}
      placement={Placements.LEFT}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Popper>
  ))
  .add('right', () => (
    <Popper
      popoutComponent={"popped out"}
      placement={Placements.RIGHT}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Popper>
  ))

storiesOf('Tooltip', module)
  .add('top', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.TOP}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('top-start', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.TOP_START}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('top-end', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.TOP_END}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('bottom', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.BOTTOM}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('bottom-start', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.BOTTOM_START}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('bottom-end', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.BOTTOM_END}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('right', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.RIGHT}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('right-start', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.RIGHT_START}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('right-end', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.RIGHT_END}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('left', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.LEFT}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('left-start', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.LEFT_START}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
  .add('left-end', () => (
    <Tooltip
      message="tooltip message"
      placement={Placements.LEFT_END}
      forceOpen={true}
    >
      <Text>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </Tooltip>
  ))
