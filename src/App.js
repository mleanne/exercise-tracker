import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import UpdateExercise from './Pages/UpdateExercise';
import CreateExcerise from './Pages/CreateExcerise';
import AppHeader from './Components/HeaderComponents/AppHeader';
import Navigation from './Components/HeaderComponents/Navigation';

function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<UpdateExercise />} />
          <Route path="/create" element={<CreateExcerise />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;