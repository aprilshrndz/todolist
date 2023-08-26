import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthPage from './pages/authPage'
import DashboardPage from './pages/dashboardPage'

import './App.css'

function App() {

  // const path = window.location.pathname

  return (
    <>
      <div className='w-screen h-screen bg-custom-gray'>
        <Router>
          <Routes>
            <Route path='/' element={<DashboardPage />}/>
            <Route path='/login' element={<AuthPage />}/>
            <Route path='/register' element={<AuthPage />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
