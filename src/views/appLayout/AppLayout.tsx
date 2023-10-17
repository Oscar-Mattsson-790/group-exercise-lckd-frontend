import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <header>LOGO</header>
      <main>
        <Outlet />
      </main>
      <button>click</button>
    </div>
  );
}

export default AppLayout;
