import './Login.scss'
import logo from '../../assets/logo.svg'

function Login() {
  return (
    <>
    <img src={logo} alt="Logo picture" />
    <h1 className='main-title'>LCKD</h1>
    <h3 className='main-text'>KEEPING YOUR PASSWORDS SAFE</h3>
    </>
  );
}

export default Login;
