import { useState } from 'react';

import IconEdit from '../../icons/IconEdit.tsx';
import IconView from '../../icons/IconView.tsx';
import IconViewDisabled from '../../icons/IconViewDisabled.tsx';

import './CredentialsListItem.scss';

interface Props {
  domain: string;
}

function CredentialsItem({ domain }: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="credentials-list-item"
    >
      <p className="credentials-list-item__domain">{domain}</p>

      <aside className={'credentials-list-item__buttons'}>
        {isActive ? (
          <>
            <IconEdit />
            <IconView />
          </>
        ) : (
          <IconViewDisabled />
        )}
      </aside>
    </li>
  );
}

export default CredentialsItem;
