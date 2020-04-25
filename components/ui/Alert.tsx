import { FC, useState, useEffect } from 'react';

interface IProps {
  type?: string;
  title: string;
  message: string;
  onClose?: Function;
}

const Alert: FC<IProps> = ({
  type = 'default',
  title,
  message,
  onClose = () => {},
}) => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (type === 'default') {
      setBgColor('bg-white');
    } else if (type === 'success') {
      setBgColor('bg-green-400');
    } else if (type === 'danger') {
      setBgColor('bg-red-400');
    } else if (type === 'primary') {
      setBgColor('bg-blue-500');
    } else if (type === 'warning') {
      setBgColor('bg-orange-400');
    } else if (type === 'info') {
      setBgColor('bg-blue-300');
    }
  }, []);

  return (
    <>
      <div className={`${bgColor} py-2 px-3`}>
        <div className='text-lg'>
          <h1 className='text-left'>{title}</h1>
          <div
            className='cursor-pointer'
            style={{ marginLeft: '95%', marginTop: '-9%' }}
            onClick={() => onClose()}
          >
            &times;
          </div>
        </div>
        <p className='text-left text-sm mt-1'>{message}</p>
      </div>
    </>
  );
};

export default Alert;
