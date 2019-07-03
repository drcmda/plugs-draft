import React, { useRef, useState, useEffect } from 'react'
import { useRender } from 'react-three-fiber'
import { useStore, useActivePlugin } from '../store'

function Root() {
  // Connected state
  const { Group, Button, Input, Label } = useStore(state => state.elements)
  const set = useActivePlugin(state => state.set)
  // Local state
  const [value, setValue] = useState('test')

  return (
    <Group>
      <Button>Blend</Button>
      <Label>hi</Label>
      <Input value={value} onChange={e => setValue(e.target.value)} />
    </Group>
  )
}

function View() {
  const self = useActivePlugin()
  const ref = useRef()
  useRender(() => (ref.current.rotation.y += 0.05))
  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <meshStandardMaterial attach="material" color="hotpink" />
      <octahedronGeometry attach="geometry" />
    </mesh>
  )
}

const description = {
  name: 'Blend',
  version: '1.0.0',
  author: 'Paul Henschel',
  persistent: false,
}

export { Root, View, description }
