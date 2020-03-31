import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  width: string;
};

const Image: FC<Props> = ({ src, alt, width = '100%' }) => {
  return (
    <div style={{ width: width, margin: 'auto' }}>
      <img src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
};

export default Image;
