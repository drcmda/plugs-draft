import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { useStore } from './store'
import Plugin from './elements/Plugin'

export default function App() {
  const activePlugin = useStore(state => state.plugins.active)
  const actions = useStore(state => state.actions)

  useEffect(() => {
    // Plugins can be imported async
    actions.createPlugin(import('./plugins/Sketch'), 0)
    actions.createPlugin(import('./plugins/Blend'), 1)
    // Activate sketch
    actions.setActivePlugin(0)
    // Activate blend
    setTimeout(() => actions.setActivePlugin(1), 4000)
    // Activate sketch, we expect state to be reset now
    setTimeout(() => actions.setActivePlugin(0), 6000)
  }, [])

  return (
    <>
      {/* 3D View */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <Plugin view id={activePlugin} />
      </Canvas>
      {/* UI View */}
      <Plugin id={activePlugin} />
    </>
  )
}