import CredentialsListItem from './CredentialsListItem/CredentialsListItem.tsx';

import type { Credentials } from '../../types/types.ts';

import './CredentialsList.scss';

interface Props {
  credentials: Credentials[];
}

function CredentialsList({ credentials }: Props) {
  return (
    <article className="credentials-list">
      <label className="credentials-list__label">Stored passwords</label>
      <ol className="credentials-list__list">
        {credentials.map((credential) => (
          <CredentialsListItem key={credential.id} domain={credential.domain} />
        ))}
      </ol>
    </article>
  );
}

export default CredentialsList;
