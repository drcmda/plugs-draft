import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components/macro'
import App from './App'
import 'antd/dist/antd.css'

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

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root'),
)
