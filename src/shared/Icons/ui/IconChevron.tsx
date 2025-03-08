import { FC, SVGProps } from 'react';

export const IconChevron: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={9}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m1 8 7-7 7 7'
    />
  </svg>
);
