import './button.scss';
interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
