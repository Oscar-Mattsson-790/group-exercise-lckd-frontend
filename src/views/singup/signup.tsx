import logo from '../../assets/logo.svg';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputfield';
import { useState } from 'react';

function Signup() {
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
        <Button onClick={() => {}}>SIGN ME UP!</Button>
      </footer>
    </>
  );
}

export default Signup;
