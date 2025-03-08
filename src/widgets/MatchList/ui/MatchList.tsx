import { FC } from 'react';
import { MatchListProps } from '../model';
import { MatchCard } from '@/entities';

export const MatchList: FC<MatchListProps> = ({ items, isLoading }) => {
  if (isLoading)
    return (
      <div className='flex justify-center'>
        <span className='font-inter text-xl'>Загрузка...</span>
      </div>
    );

  return (
    <div className='flex flex-col gap-8 w-full'>
      {items.map((match, index) => (
        <MatchCard
          key={index}
          match={match}
        />
      ))}
    </div>
  );
};
