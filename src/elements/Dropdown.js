import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Select)`
  ${base}
`

export default function({ children, ...props }) {
  return (
    <Base {...props}>
      {children && children.map((child, index) => (
        <Select.Option key={child} value={child}>
          {child}
        </Select.Option>
      ))}
    </Base>
  )
}
