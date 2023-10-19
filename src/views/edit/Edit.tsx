import './Edit.scss';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputfield';
import { useState } from 'react';

export default function Edit() {
  const [www, setWWW] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleWWWChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWWW(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUpdate = () => {
    console.log('Updated Data:', {
      www,
      username,
      password,
    });
  };

  return (
    <>
      <main>
        <h1 className="edit-title">EDIT YOUR CREDENTIALS</h1>
        <InputField
          label="WWW"
          type="www"
          value={www}
          onChange={handleWWWChange}
        />
        <InputField
          label="USERNAME"
          type="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputField
          label="SECURE PASSWORD"
          type="text"
          value="password"
          onChange={handlePasswordChange}
        />
      </main>
      <footer>
        <Button onClick={handleUpdate}>UPDATE LCKD</Button>
      </footer>
    </>
  );
}
