import { Outlet, useNavigate, useLocation } from 'react-router-dom';


function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <div>
      {path === '/group-exercise-lckd-frontend/' ? <header> <button className="signup-button">Sign up</button> </header> : <header>LOGO</header> }
      <main>
        <Outlet />
      </main>
      <button
      onClick={() => navigate('/signup')}>click</button>
    </div>
  );
}

export default AppLayout;
