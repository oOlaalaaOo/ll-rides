import { FC } from 'react';

interface IProps {
  top?: string;
  bottom?: string;
}

const LineBreak: FC<IProps> = ({ top = '5px', bottom = '5px' }) => {
  return (
    <>
      <div style={{ width: '100%', paddingTop: top, paddingBottom: bottom }} />
    </>
  );
};

export default LineBreak;
