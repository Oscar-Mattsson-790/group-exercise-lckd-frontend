import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { sendGetCredentialsRequest } from '../../api/index.ts';

import CredentialsList from '../../components/CredentialsList/CredentialsList.tsx';
import PasswordField from '../../components/PasswordField/PasswordField.tsx';
import Button from '../../components/button/button.tsx';
import { Credentials } from '../../types/types.ts';

function StoredPasswords() {
  const [credentials, setCredentials] = useState<Credentials[] | null>();
  const [selectedItemId, setSelectedItemId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendGetCredentialsRequest();
      setCredentials(data);
    };

    fetchData();
  }, []);

  const getSelectedItem = (id: string) =>
    credentials?.filter((credentials) => credentials.id === id).at(0);

  return (
    <>
      <main>
        {credentials?.length && (
          <>
            <CredentialsList
              credentials={credentials}
              buttonEdit={(credential) => navigate(`/edit/${credential.id}`)}
              buttonView={(credential) => setSelectedItemId(credential.id)}
            />
            <PasswordField
              password={getSelectedItem(selectedItemId)?.password || ''}
            />
          </>
        )}
      </main>
      <footer>
        <Button onClick={() => {}}>NEW LCKD</Button>
      </footer>
    </>
  );
}

export default StoredPasswords;
