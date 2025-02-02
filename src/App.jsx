
import './App.css'
import FullWebsite from './assets/FullWebsite'
import { BrowserRouter as Router } from 'react-router-dom'
import UseContext from './assets/Context/UseContext'

function App() {


  return (
    <>
      <UseContext>
        <Router>
          <FullWebsite />
        </Router>
      </UseContext>
    </>
  )
}

export default App
