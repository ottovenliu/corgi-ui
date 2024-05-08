import React from 'react'
import ReactDOM from 'react-dom/client'
import CorgiButton from './components/buttons/button'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Primary Btn</h2>
      <CorgiButton type='Primary' content='Corgi is so cute~!!' />
    </div>
    <hr />
    <div>
      <h2>Destructive Btn</h2>
      <CorgiButton type='Destructive' content='Corgi is so cute~!!' />
    </div>
    <hr />
    <div>
      <h2>Safe Btn</h2>
      <CorgiButton type='Safe' content='Corgi is so cute~!!' />
    </div>
    <hr />
    <div>
      <h2>Warning Btn</h2>
      <CorgiButton type='Warning' content='Corgi is so cute~!!' />
    </div>
    <hr />
    <div>
      <h2>Info Btn</h2>
      <CorgiButton type='Info' content='Corgi is so cute~!!' />
    </div>
    <hr />
  </React.StrictMode>,
)
