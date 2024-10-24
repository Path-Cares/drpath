type ButtonProps = {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
  };
  
  const button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', ...otherProps }) => {
    return (
      <button type={type} onClick={onClick} {...otherProps}>
        {text}
      </button>
    );
  };
  
  export default button;