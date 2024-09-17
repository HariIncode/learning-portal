import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signin from './components/screens/Signup';
import Login from './components/screens/Login';
import Course from './components/Course'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signin />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/course/:id' element={<Course />}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;