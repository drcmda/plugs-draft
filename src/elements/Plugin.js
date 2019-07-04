import React from 'react'
import styled from 'styled-components/macro'
import { usePlugin } from '../store'

export default function Plugin({ view, id }) {
  const name = usePlugin(id, state => state.name)
  const Root = usePlugin(id, state => state.Root)
  const View = usePlugin(id, state => state.View)
  if (view && View) {
    return <View />
  } else if (!view && Root) {
    return (
      <Container>
        <h2>{name}</h2>
        <Root />
      </Container>
    )
  }
  return null
}

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 40px;
  width: 350px;
  color: rgba(0, 0, 0, 0.75);
  background: #dfdfdf;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 80px 500px -50px #c3c3c3;
`
