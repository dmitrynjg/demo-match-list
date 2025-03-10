import { FC } from 'react';
import { MatchCardStatProps } from '../model';
import Image from 'next/image';

export const MatchCardStat: FC<MatchCardStatProps> = ({
  players,
  place,
  totalKills,
  points,
}) => {
  return (
    <div className='flex-1 w-full'>
      <div className='flex gap-[8px] mb-[8px] justify-between overflow-y'>
        {players.map((player, index) => (
          <div
            key={index}
            className='flex w-1/3 flex-wrap justify-between bg-[#101318] items-center px-[12px] lg:px-[24px] py-[8px] rounded-sm'
          >
            <div className='flex gap-[8px] items-center lg:justify-left justify-center w-full lg:w-auto'>
              <Image
                src='/assets/avatar.png'
                width={200}
                height={200}
                className='w-[36px] h-[36px]'
                alt={player.username}
              />
              <span
                className='font-inter text-white text-sm lg:text-base truncate tracking-normal'
                style={{
                  lineHeight: 1.5,
                }}
              >
                {player.username}
              </span>
            </div>
            <div className='flex gap-[8px] lg:justify-left justify-center w-full lg:w-auto'>
              <span
                className='font-inter font-medium text-xs lg:text-sm text-[#626467]'
                style={{
                  lineHeight: 1.5,
                }}
              >
                Убийств:
              </span>
              <span
                className='font-inter font-semibold text-sm lg:text-base text-white'
                style={{
                  lineHeight: 1.5,
                }}
              >
                {player.kills}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full gap-[8px] justify-between bg-[#101318] items-center px-[12px] lg:px-[24px] py-[14px] rounded-sm'>
        <div className='w-1/3 flex items-center justify-center w-full gap-[8px]'>
          <span
            className='font-inter font-medium lg:text-sm text-xs text-[#626467]'
            style={{
              lineHeight: 1.5,
            }}
          >
            Points:
          </span>
          <span
            className='font-inter font-semibold lg:text-base text-sm text-white'
            style={{
              lineHeight: 1.5,
            }}
          >
            +{points}
          </span>
        </div>
        <div className='w-1/3 flex items-center justify-center w-full gap-[8px]'>
          <span
            className='font-inter font-medium lg:text-sm text-xs text-[#626467]'
            style={{
              lineHeight: 1.5,
            }}
          >
            Место:
          </span>
          <span
            className='font-inter font-semibold lg:text-base text-sm text-white'
            style={{
              lineHeight: 1.5,
            }}
          >
            {place}
          </span>
        </div>
        <div className='w-1/3 flex items-center justify-center w-full gap-[8px]'>
          <span
            className='font-inter font-medium lg:text-sm text-xs text-[#626467] whitespace-nowrap'
            style={{
              lineHeight: 1.5,
            }}
          >
            Всего убийств:
          </span>
          <span
            className='font-inter font-semibold lg:text-base text-sm text-white'
            style={{
              lineHeight: 1.5,
            }}
          >
            {totalKills}
          </span>
        </div>
      </div>
    </div>
  );
};