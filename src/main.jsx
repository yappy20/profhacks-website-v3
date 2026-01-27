import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

// Remove cursor attributes
if (rootElement) {
  rootElement.removeAttribute('data-cursor-element-id')
  
  // Watch for attribute changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && 
          mutation.attributeName === 'data-cursor-element-id') {
        const target = mutation.target
        if (target && target.hasAttribute('data-cursor-element-id')) {
          target.removeAttribute('data-cursor-element-id')
        }
      }
    })
  })
  
  observer.observe(rootElement, {
    attributes: true,
    attributeFilter: ['data-cursor-element-id']
  })
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

