import InputField from '../../components/inputfield/inputfield';
import './New.scss';
import Button from '../../components/button/button';
import { useState } from 'react';
function NewCredential() {
  const [website, setWebsite] = useState('www.tickster.com');
  const [username, setUsername] = useState('sixten.svensson');

  function handleOnChangeWebsite(event: React.ChangeEvent<HTMLInputElement>) {
    setWebsite(event.target.value);
  }

  function handleOnChangeUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
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
          <span className="refresh-button" onClick={() => {}}>
            ↻
          </span>
          <InputField
            label="SECURE PASSWORD"
            type="text"
            value={''}
            disabled={true}
          />
        </div>
      </main>
      <footer>
        <div className="styled-button-container">
          <Button onClick={() => {}}>CREATE LCKD</Button>
        </div>
      </footer>
    </>
  );
}

export default NewCredential;
