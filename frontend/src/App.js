import { Login } from './pages/Login';
import { Header } from './components/Header';
import { Cadastro } from './pages/Cadastro';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
// Use router

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
