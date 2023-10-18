import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo.svg";
import "./AppLayout.scss";

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  console.log(path);

  return (
    <div className="main-component-container">
      <header>
        {path === "/" ? (
          <button
            className="signup-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        ) : (
          <img className="logo-img__pages" src={logoIcon} alt="" />
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p style={{ color: "#fff" }}>
          © 2023 LCKD Made with ❤️ by Fantastic Surfers
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
