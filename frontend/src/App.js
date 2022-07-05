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
import { PrivateRoutes } from './routes/private/PrivateRoutes';
import { UserNotAuthorized } from './pages/UserNotAuthorized';
import { TeacherHome } from './pages/TeacherHome';
import { CoordinatorHome } from './pages/CoordinatorHome';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Header />

         <Routes>

       <Routes>

          <Route path="/" exact element={<Navigate to="/login" />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/user-not-authorized" element={<UserNotAuthorized />} />
          <Route
            path="/admin-home"
            element={
              <PrivateRoutes allowedRoles={['admin']}>
                <AdminHome />
              </PrivateRoutes>
            }
          />
          <Route
            path="/teacher-home"
            element={
              <PrivateRoutes allowedRoles={['teacher']}>
                <TeacherHome />
              </PrivateRoutes>
            }
          />
          <Route
            path="/coordinator-home"
            element={
              <PrivateRoutes allowedRoles={['coordinator']}>
                <CoordinatorHome />
              </PrivateRoutes>
            }
          />
        </Routes> 
      </StoreProvider>
    </Router>
  );
}

export default App;
