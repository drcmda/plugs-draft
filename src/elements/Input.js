import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Input)`
  ${base}
`

export default function({ ...props }) {
  return <Base {...props} />
}
