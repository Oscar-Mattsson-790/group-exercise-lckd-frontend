import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/login/Login";
import AppLayout from "./views/appLayout/AppLayout";
import StoredPasswords from "./views/storedPasswords/StoredPasswords.tsx";
import Edit from "./views/edit/Edit.tsx";
import NewCredential from "./views/new/New.tsx";
import Signup from "./views/singup/signup.tsx";

function App() {
  return (
    <BrowserRouter basename="group-exercise-lckd-frontend">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="stored-passwords" element={<div>password</div>} />
          <Route path="new" element={<NewCredential />} />

          <Route path="stored-passwords" element={<StoredPasswords />} />
          <Route path="new" element={<div>new credentials</div>} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
