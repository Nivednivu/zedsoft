import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login/Login'
import List from './Page/List/List'
import View from './Page/View/View'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/view/:userId' element={<View/>}/>
    </Routes>
    </>
  )
}

export default App
