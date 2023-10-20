import './button.scss';
interface Props {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

function Button({ onClick, children, disabled }: Props) {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
