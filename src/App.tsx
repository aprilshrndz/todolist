import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

function App() {

  // const path = window.location.pathname

  return (
    <>
      <div className='w-screen h-screen bg-custom-gray'>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Auth />}/>
            <Route path='/register' element={<Auth />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
