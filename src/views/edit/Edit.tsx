import './Edit.scss';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputfield';
import { getCredentialsData, sendUpdateRequest } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {

  const [www, setWWW] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCredentialsData(id!);
      setUsername(data.username)
      setWWW(data.domain)
    };

      fetchData();
    
  }, []);


  function generateSecurePassword() {
    const length = 20;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'<>,.?/";

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
  }

  
  async function handleOnClick() {
    const data = {
      password
    };

    await sendUpdateRequest(id!, data);
  }

  return (
    <>
      <main>
        <h1 className="edit-title">EDIT YOUR CREDENTIALS</h1>
        <InputField
          label="WWW"
          type="www"
          value={www}
          disabled={true}
        />
        <InputField
          label="USERNAME"
          type="username"
          value={username}
          disabled={true}
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
        <Button onClick={handleOnClick}>UPDATE LCKD</Button>
      </footer>
    </>
  );
}
