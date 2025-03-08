import { FC } from 'react';

export const Layout: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props} className='lg:px-[42px] px-[15px]' />;
};
