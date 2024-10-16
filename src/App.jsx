import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import MyRoute from './routes/routes'

function App() {
  return (
    <>
      <Router>
        <MyRoute/>
      </Router>
    </>
  )
}

export default App
