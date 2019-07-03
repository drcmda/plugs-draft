import React from 'react'
import { Slider } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Slider)`
  ${base}
  width: unset;
`

export default function({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}