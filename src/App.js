import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signin from "./components/screens/Signup";
import Login from "./components/screens/Login";
import AdminScreen from "./components/screens/AdminScreen";
import Course from "./components/Course";
import CoursesState from "./components/context/coursesStates";

function App() {
  return (
    <>
      <CoursesState>
        <BrowserRouter>
          <Header />
          <main>
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/course/:id" element={<Course />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </BrowserRouter>
      </CoursesState>
    </>
  );
}

export default App;
