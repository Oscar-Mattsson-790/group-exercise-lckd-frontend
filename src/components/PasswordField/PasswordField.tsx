import IconCopy from '../icons/IconCopy.tsx';

import './PasswordField.scss';

interface Props {
  password: string;
}

function PasswordField({ password }: Props) {
  return (
    <article className="password-field">
      <label className="password-field__label">Plain sight</label>

      <section className="password-field__group">
        <p className="password-field__password">{password}</p>
        <button className="password-field__copy">
          <IconCopy />
        </button>
      </section>
    </article>
  );
}

export default PasswordField;
