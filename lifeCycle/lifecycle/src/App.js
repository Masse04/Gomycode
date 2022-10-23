import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './composant/home';
import SignIn from './composant/signIn';
import Navbar from './composant/navbar';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
