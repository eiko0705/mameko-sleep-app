import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
