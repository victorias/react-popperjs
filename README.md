# react-popperjs

This library is a react wrapper around [PopperJS](https://github.com/FezVrasta/popper.js/).

This project is under active development, so apologies if the API changes unexpectedly.

## Install

`npm install react-popperjs --save`

## Usage

```jsx
import { Popper, Tooltip } from 'react-popperjs';

const PopperExample = () => (
  <Popper
    popoutComponent={<div>Pop me out</div>}
  >
    <div>
      Align the popped element to me
    </div>
  </Popper>
);

const Tooltip = () => (
  <Tooltip
    message="tooltip message"
  >
    <div>
      Hover over me for a tooltip
    </div>
  </Tooltip>
);
```

## Popper

The `<Popper />` component is only responsible for attaching the popped out element onto the page, and aligning it properly. It has these props:

```jsx
type Props = {
  arrowColor: string,
  arrowSize: number,
  children?: any,
  hasArrow: any,
  isOpen: boolean,
  placement: Placement,
  popoutComponent: any,
}
```

## Tooltip

Since tooltips are a major usecase for poppers, this library comes with a default tooltip that shows the tooltip when the parent component is being hovered over. Tooltip takes these props:

```jsx
type Props = {
  arrowColor: string,
  arrowSize: number,
  children?: any,
  forceOpen?: boolean,
  message: any,
  placement: Placement,
  tooltipClassName?: string,
  tooltipStyle?: Object,
}
```

## Examples

This project uses [React Storybook](https://github.com/storybooks/react-storybook) for demos and examples. Examples are located in `stories/index.js` and can be run with `npm run storybook`
