import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/login/Login';
import AppLayout from './views/appLayout/AppLayout';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/interval-app/'}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<div>sign up</div>} />

        <Route element={<AppLayout />}>
          <Route path="stored-passwords" element={<div>password</div>} />
          <Route path="new" element={<div>new credentials</div>} />
          <Route path="edit/:id" element={<div>edit credentials</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
