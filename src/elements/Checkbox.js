import React from 'react'
import { Checkbox } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Checkbox)`
  ${base}
  align-items: center;
  display: flex!important;
`

export default function({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}
