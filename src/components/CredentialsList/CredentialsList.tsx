import { useState } from 'react';
import CredentialsListItem from './CredentialsListItem/CredentialsListItem.tsx';

import type { Credentials } from '../../types/types.ts';

import './CredentialsList.scss';

interface Props {
  credentials: Credentials[];
  buttonView: (item: Credentials) => void;
  buttonEdit: (item: Credentials) => void;
}

function CredentialsList({ credentials, buttonView, buttonEdit }: Props) {
  const [selectedItemId, setSelectedItemId] = useState('');

  return (
    <article className="credentials-list">
      <label className="credentials-list__label">Stored passwords</label>
      <ol className="credentials-list__list">
        {credentials.map((credential) => (
          <CredentialsListItem
            key={credential.id}
            credentials={credential}
            buttonEdit={() => buttonEdit(credential)}
            buttonView={() => {
              setSelectedItemId(credential.id);
              buttonView(credential);
            }}
            selected={selectedItemId == credential.id}
          />
        ))}
      </ol>
    </article>
  );
}

export default CredentialsList;
