import InputField from '../../components/inputfield/inputfield';
import './New.scss';
import Button from '../../components/button/button';
import { useState } from 'react';
import { sendSaveCredentialsRequest } from '../../api';
function NewCredential() {
  const [website, setWebsite] = useState('www.tickster.com');
  const [username, setUsername] = useState('sixten.svensson');
  const [password, setPassword] = useState('');

  function generateSecurePassword() {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'<>,.?/";

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
  }

  function handleOnChangeWebsite(event: React.ChangeEvent<HTMLInputElement>) {
    setWebsite(event.target.value);
  }

  function handleOnChangeUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  async function handleOnClick() {
    const data = {
      username,
      password,
      domain: website,
    };
    await sendSaveCredentialsRequest(data);
  }

  return (
    <>
      <main>
        <h1 className="main-text-new-view">NEW SECURE CREDENTIALS</h1>
        <InputField
          label="WWW"
          type="text"
          value={website}
          onChange={handleOnChangeWebsite}
        />
        <InputField
          label="USERNAME"
          type="username"
          value={username}
          onChange={handleOnChangeUserName}
        />
        <div className="label-container">
          <span className="refresh-button" onClick={generateSecurePassword}>
            ↻
          </span>
          <InputField
            label="SECURE PASSWORD"
            type="text"
            value={password}
            disabled={true}
          />
        </div>
      </main>
      <footer>
        <div className="styled-button-container">
          <Button
            disabled={password === '' ? true : false}
            onClick={handleOnClick}
          >
            CREATE LCKD
          </Button>
        </div>
      </footer>
    </>
  );
}

export default NewCredential;
