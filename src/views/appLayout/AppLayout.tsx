import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logoSmall from '../../assets/logoSmall.svg';
import './AppLayout.scss';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  console.log(path);

  return (
    <div className="main-component-container">
      <header>
        {path === '/' ? (
          <button
            className="signup-button"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign up
          </button>
        ) : (
          <div className="logo-container">
            <img className="logo-container__pages" src={logoSmall} alt="logo" />
            <h3 className="logo-container__text">LCKD</h3>
          </div>
        )}
      </header>
      <Outlet />
      <p style={{ color: '#fff' }}>
        © 2023 LCKD Made with ❤️ by Fantastic Surfers
      </p>
    </div>
  );
}

export default AppLayout;
