import './Login.scss'
import logo from '../../assets/logo.svg'
import Button from '../../components/button/button';

function Login() {
  return (
    <>
    <img src={logo} alt="Logo picture" />
    <h1 className='main-title'>LCKD</h1>
    <h3 className='main-text'>KEEPING YOUR PASSWORDS SAFE</h3>
    <Button onClick={() => {}}>Login</Button>
    </>
  );
}

export default Login;
