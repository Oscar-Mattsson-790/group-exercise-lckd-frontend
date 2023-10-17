import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/logo.svg';
import './AppLayout.scss';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  console.log(path);

  return (
    <div className='main-component-container'>
      <header>
        {path === '/group-exercise-lckd-frontend/' ? (
          <button className="signup-button"
          onClick={() => {navigate('/signup')}}>Sign up</button>
        ) : (
          <img className='logo-img__signup-page' src={ logoIcon } alt="" />
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2021 LCKD</p>
      </footer>
    </div>
  );
}

export default AppLayout;
