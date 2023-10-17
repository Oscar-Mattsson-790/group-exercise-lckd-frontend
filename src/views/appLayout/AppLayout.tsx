import { Outlet, useNavigate } from 'react-router-dom';


function AppLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <header>LOGO</header>
      <main>
        <Outlet />
      </main>
      <button
      onClick={() => navigate('/signup')}>click</button>
    </div>
  );
}

export default AppLayout;
