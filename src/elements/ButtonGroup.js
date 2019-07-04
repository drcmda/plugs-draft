import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Button.Group)`
  ${base}
  display: flex!important;
  padding-left: 2px;
  padding-right: 2px;
  & > button {
    width: unset;
    display: unset;
    margin-left: 0;
    margin-right: 0;
  }
`

export default function({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}
