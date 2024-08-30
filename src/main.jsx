import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
