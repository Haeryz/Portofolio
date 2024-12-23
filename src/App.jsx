import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Layout/Index'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
