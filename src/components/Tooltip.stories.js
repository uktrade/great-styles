import React from 'react'
import { select } from '@storybook/addon-knobs'
import { Tooltip } from './tooltip/Tooltip'

export default {
  title: 'Actions/Tooltips',
  component: Tooltip,
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
    <div className={`${bgSelect()} p-v-m`} style={style}>
      <div className='container'>
        <Tooltip {...tooltipData} />
      </div>
    </div>
  )
}

export const Tooltip_Right = () => {
  return (
    <div className={`${bgSelect()} p-v-m`} style={styleRight}>
      <div className='container'>
      <Tooltip {...tooltipDataRight} faIcon="fa-info" />
      </div>
    </div>
  )
}

export const Tooltip_hidden_title = () => {
  return (
    <div className={`${bgSelect()} p-v-m`} style={style}>
      <div className='container'>
      <Tooltip {...tooltipDataTitleHidden} faIcon="fa-info" />
      </div>
    </div>
  )
}
