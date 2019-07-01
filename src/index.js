import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { useStore, useActivePlugin } from './store'
import './index.css'

function App() {
  const Root = useActivePlugin(state => state.Root)
  const RootView = useActivePlugin(state => state.View)
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
      {/* UI View */}
      <div style={{ position: 'absolute', top: 0, color: 'white' }}>{Root && <Root />}</div>
      {/* 3D View */}
      <Canvas>
        <ambientLight color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        {RootView && <RootView />}
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
