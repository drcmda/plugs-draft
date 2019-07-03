import React from 'react'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled.div`
  ${base}
  display: flex;
  flex-direction: ${props => (!props.format || props.format === 'Rows' ? 'row' : 'column')};
`

export default function Group({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}
