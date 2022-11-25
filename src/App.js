import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import Home from './pages/Home'
import Project from './pages/Project'
import Collaboration from './pages/Collaboration'
import Form from './pages/Form'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Collaboration" element={<Collaboration />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
