import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <header>LOGO</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
