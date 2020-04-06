import { FC, InputHTMLAttributes } from 'react';

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  loading?: boolean;
  value: string;
  onChange(value: string): void;
}

const Input: FC<IProps> = ({ loading = false, onChange, ...rest }) => {
  return (
    <>
      <input onChange={(e: any) => onChange(e.target.value)} {...rest} />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
