import './Login.scss';
import logo from '../../assets/logo.svg';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputfield';
import { useState } from 'react';
import { sendLoginRequest } from '../../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleOnChangeUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleOnChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
<<<<<<< HEAD
      <img src={logo} alt="Logo picture" />
      <h1 className="main-title">LCKD</h1>
      <h3 className="main-text">KEEPING YOUR PASSWORDS SAFE</h3>
      <InputField
        label="USERNAME"
        type="username"
        value={username}
        onChange={handleOnChangeUserName}
      />
      <InputField
        label="PASSWORD"
        type="password"
        value={password}
        onChange={handleOnChangePassword}
      />
      <Button onClick={async () => sendLoginRequest(username, password)}>
        LET ME IN
      </Button>
=======
      <main>
        <img src={logo} alt="Logo picture" />
        <h1 className="main-title">LCKD</h1>
        <h3 className="main-text">KEEPING YOUR PASSWORDS SAFE</h3>
        <InputField
          label="USERNAME"
          type="username"
          value={username}
          onChange={handleOnChangeUserName}
        />
        <InputField
          label="PASSWORD"
          type="password"
          value={password}
          onChange={handleOnChangePassword}
        />
      </main>
      <footer>
        <Button onClick={() => {}}>LET ME IN</Button>
      </footer>
>>>>>>> 49150fdb04169fcb8965754bebd1085bfee25059
    </>
  );
}

export default Login;
