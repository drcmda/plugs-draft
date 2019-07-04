import React from 'react'
import { Collapse } from 'antd'
import styled from 'styled-components/macro'
import { base } from './styles'

const Base = styled(Collapse)`
  ${base}
  background-color: rgba(255,255,255,0.5)!important;
`

export default function({ children, header, ...props }) {
  return (
    <Base {...props} bordered={false} defaultActiveKey={['1']}>
      <Collapse.Panel header={header} key="1">
        {children}
      </Collapse.Panel>
    </Base>
  )
}
