import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {Tooltip} from "./tooltip/Tooltip";

export default {
  title: "Actions/Tooltips",
  parameters: {
    component: Tooltip,
    decorators: [withKnobs],
  },
};

const tooltipLeft = {
  title: "Tooltip title",
  content: `
    <p>Porchetta venison meatloaf jerky, short loin burgdoggen pastrami. Brisket filet mignon bresaola turkey flank strip steak. </p>
    <ul>
    <li>Point <em>emphasis</em></li>
    <li>Point <em>emphasis</em></li>
    <li>Point <em>emphasis</em></li>
    <li>Point <em>emphasis</em></li>
    </ul>
    <p>Porchetta venison meatloaf jerky, short loin burgdoggen pastrami. Brisket filet mignon bresaola turkey flank strip steak. </p>
`,
};
const tooltipRight = {...tooltipLeft, position: "right"};

export const Tooltip_left = () => {
  return (
    <div>
      <Tooltip {...tooltipLeft} />
    </div>
  );
};

export const Tooltip_Right = () => {
  return (
    <div>
      <Tooltip {...tooltipRight} />
    </div>
  );
};
