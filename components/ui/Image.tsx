import { FC } from 'react';

interface IProps {
  src: string;
  alt: string;
  width: string;
}

const Image: FC<IProps> = ({ src, alt, width = '100%' }) => {
  return (
    <div style={{ width: width, margin: 'auto' }}>
      <img src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
};

export default Image;
