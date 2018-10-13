import React from 'react'
import ReactDOM from 'react-dom'
import GAnalytics from 'ganalytics'
import { BrowserRouter } from 'react-router-dom'
import App from '@components/App'
import './index.sass'
import Provider from './Provider'

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === 'production') {
  window.ga = new GAnalytics('UA-XXXXXXXX-X')

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
}
