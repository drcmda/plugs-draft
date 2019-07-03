import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { Canvas } from 'react-three-fiber'
import { useStore, useActivePlugin } from './store'
import 'antd/dist/antd.css'

function App() {
  const Root = useActivePlugin(state => state.Root)
  const pluginName = useActivePlugin(state => state.name)
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
      <Global />
      {/* 3D View */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        {RootView && <RootView />}
      </Canvas>
      {/* UI View */}
      <Plugin name={pluginName}>{Root && <Root />}</Plugin>
    </>
  )
}

function Plugin({ name, children }) {
  return (
    <PluginFrame>
      <div>{name}</div>
      {children}
    </PluginFrame>
  )
}

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
      segoe ui, arial, sans-serif;
    color: black;
    -webkit-font-smoothing: antialiased;
  }
`

const PluginFrame = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 40px;
  width: 400px;
  color: rgba(0, 0, 0, 0.75);
  background: #dfdfdf;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`

ReactDOM.render(<App />, document.getElementById('root'))
