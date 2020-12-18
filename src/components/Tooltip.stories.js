import React from 'react'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { Tooltip } from './tooltip/Tooltip'

export default {
  title: 'Actions/Tooltips',
  parameters: {
    component: Tooltip,
    decorators: [withKnobs],
  },
}

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
}
const tooltipDataRight = {
  ...tooltipData,
  position: 'right',
  title: 'Custom title',
}

const style = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
}

const styleRight = {
  ...style,
  'justify-content': 'flex-end',
}

export const Tooltip_left = () => {
  return (
    <div className="bg-blue-deep-60 p-xs" style={style}>
      <Tooltip {...tooltipData} />
    </div>
  )
}

export const Tooltip_Right = () => {
  return (
    <div className="bg-blue-deep-60 p-xs" style={styleRight}>
      <Tooltip {...tooltipDataRight} isVisible={true} faIcon="fa-info" />
    </div>
  )
}
