import { useState } from 'react';

import IconEdit from '../../icons/IconEdit.tsx';
import IconView from '../../icons/IconView.tsx';
import IconViewDisabled from '../../icons/IconViewDisabled.tsx';

import './CredentialsListItem.scss';

import type { Credentials } from '../../../types/types.ts';

interface Props {
  credentials: Credentials;
  buttonView: () => void;
  buttonEdit: () => void;
  selected: boolean;
}

function CredentialsItem({
  credentials,
  buttonView,
  buttonEdit,
  selected,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="credentials-list-item"
    >
      <p className="credentials-list-item__domain">{credentials.domain}</p>

      <aside className={'credentials-list-item__buttons'}>
        {isActive ? (
          <>
            <button onClick={buttonEdit}>
              <IconEdit />
            </button>
            <button onClick={buttonView}>
              <IconView />
            </button>
          </>
        ) : (
          <>{selected ? <IconView /> : <IconViewDisabled />}</>
        )}
      </aside>
    </li>
  );
}

export default CredentialsItem;
