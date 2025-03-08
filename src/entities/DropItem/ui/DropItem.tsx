import { FC } from 'react';
import { DropItemProps } from '../model';

export const DropItem: FC<DropItemProps> = ({ label, isSelect }) => {
  return (
    <div
      className={`p-[12px] font-inter text-[#B4B5B6] ${
        isSelect
          ? 'bg-[#171D25]'
          : 'bg-[#0F1318]'
      }`}
    >
      {label}
    </div>
  );
};
