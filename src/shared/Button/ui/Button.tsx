import { FC } from 'react';

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-[10px] py-[15px] px-[40px] rounded-sm font-inter font-semibold text-lg bg-[#EB0237] text-white hover:cursor-pointer hover:bg-[#A01131] disabled:bg-[#701328] disabled:text-[#787878] disabled:cursor-not-allowed ${className}`}
    />
  );
};
