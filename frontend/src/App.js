import { Login } from './pages/Login';
import { Header } from './components/Header';
import { Cadastro } from './pages/Cadastro';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import { PrivateRoutes } from './Routes/Private/Private';

function App() {
  const loggedIn = true;
  return (
    <Router>
      <StoreProvider>
        <Header />

        <Routes>
          <Route path="/" exact element={<Navigate to="/login" />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* TODO: Use private routes for every type of user*/}
          {/* Example: <PrivateRoutes component={PrivateComponent} > */}
        </Routes>
      </StoreProvider>
    </Router>
  );
}

export default App;
