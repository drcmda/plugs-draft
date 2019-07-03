import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Button)`
  ${base}
`

export default function({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}
