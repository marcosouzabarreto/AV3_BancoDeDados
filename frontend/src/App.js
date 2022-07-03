import { Login } from './pages/Login';
import { Header } from './components/Header';
import { Cadastro } from './pages/Cadastro';
import { AdminHome } from './pages/AdminHome';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import { AdminRoutes } from './routes/private/AdminRoutes';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Header />

        <Routes>
          <Route path="/" exact element={<Navigate to="/login" />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* TODO: Use private routes for every type of user*/}

          <Route
            path="/admin-home"
            element={
              <AdminRoutes>
                <AdminHome />
              </AdminRoutes>
            }
          />
        </Routes>
      </StoreProvider>
    </Router>
  );
}

export default App;
