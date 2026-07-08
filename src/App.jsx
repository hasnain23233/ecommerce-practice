
import './App.css'
import FullWebsite from './assets/FullWebsite'
import { BrowserRouter as Router } from 'react-router-dom'
import UseContext from './assets/Context/UseContext'
import CartProvider from './assets/Context/CartContext'

function App() {

  return (
    <>
      <UseContext>
        <CartProvider>
          <Router>
            <FullWebsite />
          </Router>
        </CartProvider>
      </UseContext>
    </>
  )
}

export default App
