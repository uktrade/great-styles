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

const tooltipData = {
  content: `
    <p>Porchetta venison meatloaf jerky, short loin burgdoggen pastrami. Brisket filet mignon bresaola turkey flank strip steak.</p>
    <ul>
    <li>Point <em>emphasis</em></li>
    <li>Point <em>emphasis</em></li>
    <li>Point <em><strong>strong</strong> emphasis</em></li>
    <li>Point <em>emphasis</em></li>
    </ul>
    <small>Something small</small>
`,
};
const tooltipDataRight = {...tooltipData, position: "right", title: "Custom title"};

const style = {
  width: "100vw",
  height: "100vh",
};

export const Tooltip_left = () => {
  return (
    <div className="height-60 bg-blue-deep-60 p-l" style={style}>
      <Tooltip {...tooltipData} />
    </div>
  );
};

export const Tooltip_Right = () => {
  return (
    <div className="height-60 bg-blue-deep-60 p-l" style={style}>
      <Tooltip
        {...tooltipDataRight}
        isVisible={true}
        className="jc-end"
        faIcon="fa-info"
      />
    </div>
  );
};
