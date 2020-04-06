import { FC, ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

const Button: FC<IProps> = ({
  label = 'Button Text',
  loading = false,
  ...rest
}) => {
  return (
    <>
      <button {...rest}>
        {loading ? (
          <>
            <i className='fas fa-circle-notch fa-spin'></i> Loading...
          </>
        ) : (
          label
        )}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
