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
  title: 'Custom title',
  position: 'right',
}

const tooltipDataTitleHidden = {
  ...tooltipData,
  showTitle: false,
}

const bgSelect = () => select('Background', {White: '', 'Deep blue': 'bg-blue-deep-60'}, 'bg-blue-deep-60')

const style = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
}

const styleRight = {
  ...style,
  justifyContent: 'flex-end',
}

export const Tooltip_left = () => {
  return (
    <div className={`${bgSelect()} p-xs`} style={style}>
      <Tooltip {...tooltipData} />
    </div>
  )
}

export const Tooltip_Right = () => {
  return (
    <div className={`${bgSelect()} p-xs`} style={styleRight}>
      <Tooltip {...tooltipDataRight} faIcon="fa-info" />
    </div>
  )
}

export const Tooltip_hidden_title = () => {
  return (
    <div className={`${bgSelect()} p-xs`} style={style}>
      <Tooltip {...tooltipDataTitleHidden} faIcon="fa-info" />
    </div>
  )
}
