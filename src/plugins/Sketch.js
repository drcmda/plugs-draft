import React, { useRef } from 'react'
import { useRender } from 'react-three-fiber'
import { useStore, useActivePlugin } from '../store'
import * as Blend from './Blend'

function Root() {
  const { Group, Button, ButtonGroup, Input, Label, Dropdown, Slider, Checkbox, Collapse } = useStore(s => s.elements)
  const set = useActivePlugin(state => state.set)
  const { opacity, color } = useActivePlugin(state => state.state)
  return (
    <>
      <Group>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Group>
      <ButtonGroup>
        <Button>a</Button>
        <Button>b</Button>
        <Button>c</Button>
        <Button>d</Button>
        <Button>e</Button>
        <Button>f</Button>
      </ButtonGroup>
      <Group>
        <Label>Input</Label>
        <Input />
      </Group>
      <Group>
        <Label>Checkbox</Label>
        <Checkbox>hello</Checkbox>
      </Group>
      <Group>
        <Label>Dropdown</Label>
        <Dropdown
          defaultValue={color}
          children={['yellow', 'red', 'blue']}
          onChange={value => set(state => (state.color = value))}
        />
      </Group>
      <Slider
        defaultValue={opacity}
        min={0}
        max={1}
        step={0.1}
        onChange={value => set(state => (state.opacity = value))}
      />
      <Collapse header="Blend">
        <Blend.Root />
      </Collapse>
    </>
  )
}

function View() {
  const { state } = useActivePlugin()
  const ref = useRef()
  useRender(() => (ref.current.rotation.x += 0.05))
  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <meshStandardMaterial attach="material" color={state.color} transparent opacity={state.opacity} />
      <octahedronGeometry attach="geometry" />
    </mesh>
  )
}

const description = {
  name: 'Sketch',
  version: '1.0.0',
  author: 'Ledas',
  persistent: true,
  initialState: {
    color: 'yellow',
    opacity: 1,
  },
}

export { Root, View, description }
