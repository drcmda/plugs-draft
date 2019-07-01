import React, { useRef, useEffect } from 'react'
import { useRender } from 'react-three-fiber'
import { useActivePlugin } from '../store'
import * as Blend from './Blend'

function Root() {
  const { set } = useActivePlugin()
  // Change color after 2 seconds
  useEffect(() => void setTimeout(() => set(draft => void (draft.color = 'red')), 2000), [])
  return (
    <>
      <div style={{ padding: 10, width: 150, background: 'black' }}>Sketch</div>
      <Blend.Root />
    </>
  )
}

function View() {
  const { state } = useActivePlugin()
  const ref = useRef()
  useRender(() => (ref.current.rotation.x += 0.1))
  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <meshStandardMaterial attach="material" color={state.color} />
      <octahedronGeometry attach="geometry" />
    </mesh>
  )
}

const description = {
  name: 'Sketch',
  version: '1.0.0',
  author: 'Ledas',
  persistent: false,
  initialState: {
    color: 'yellow',
  },
}

export { Root, View, description }
