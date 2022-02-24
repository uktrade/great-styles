import React from 'react'
import { Tooltip } from '../../components/tooltip/Tooltip'

export default {
  title: 'Components/Tooltips',
  component: Tooltip,
}

const tooltipData = {
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ea.</p>`,
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

const style = {
  display: 'flex',
  width: 'calc(100vw - 2em)',
  height: 'calc(100vh - 2em)',
}

const styleRight = {
  ...style,
  justifyContent: 'flex-end',
}

export const Tooltip_left = () => {
  return (
    <div className='p-v-m' style={style}>
      <div className='container'>
        <Tooltip {...tooltipData} />
      </div>
    </div>
  )
}

export const Tooltip_Right = () => {
  return (
    <div className='p-v-m' style={styleRight}>
      <div className='container'>
        <Tooltip {...tooltipDataRight} faIcon='fa-info' />
      </div>
    </div>
  )
}

export const Tooltip_hidden_title = () => {
  return (
    <div className='p-v-m' style={style}>
      <div className='container'>
        <Tooltip {...tooltipDataTitleHidden} faIcon='fa-info' />
      </div>
    </div>
  )
}
