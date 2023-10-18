import CredentialsList from '../../components/CredentialsList/CredentialsList.tsx';
import PasswordField from '../../components/PasswordField/PasswordField.tsx';
import { Credentials } from '../../types/types.ts';

function StoredPasswords() {
  const test: Credentials[] = [
    { id: '1', username: 'fredrik', password: 'test', domain: 'www.google.se' },
    {
      id: '2',
      username: 'fredrik',
      password: 'test',
      domain: 'www.facebook.com',
    },
    { id: '3', username: 'fredrik', password: 'test', domain: 'www.st.nu' },
  ];

  return (
    <>
      <CredentialsList credentials={test} />
      <PasswordField password="Abv34$]dff4s@ff" />
    </>
  );
}

export default StoredPasswords;
