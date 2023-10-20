import aes from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import IconCopy from '../icons/IconCopy.tsx';

import './PasswordField.scss';

interface Props {
  password: string;
}

function PasswordField({ password }: Props) {
  const decrypted = aes
    .decrypt(password, `${import.meta.env.VITE_CRYPTO_SECRET}`)
    .toString(CryptoJS.enc.Utf8);

  const copyText = (text: string) => navigator.clipboard.writeText(text);

  return (
    <article className="password-field">
      <label className="password-field__label">Plain sight</label>

      <section className="password-field__group">
        <p className="password-field__password">{decrypted}</p>
        <button
          className="password-field__copy"
          onClick={() => copyText(decrypted)}
        >
          <IconCopy />
        </button>
      </section>
    </article>
  );
}

export default PasswordField;
