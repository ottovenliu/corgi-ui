import React from 'react'
// import React, { useState } from 'react'
import { iButton } from '../../interfaces/buttons/button.interface'
import '../../styles/buttons/index.css'
const CorgiButton = ({
  content: content = undefined,
  onClick = () => {
    console.log('you click the CorgiButton!')
  },
  iconPosition: iconPosition = undefined,
  icon: icon = undefined,
  disabled: disabled = false,
  type: type = 'Primary',
}: iButton) => {
  return (
    <button className={'cButton' + `${' ' + type}` + `${disabled ? ' Disabled' : ' '}`} disabled={disabled} onClick={onClick}>
      {iconPosition === 'left' ? icon : null}
      {content}
      {iconPosition === 'right' ? icon : null}
    </button>
  )
}

export default CorgiButton
