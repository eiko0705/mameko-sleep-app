import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
