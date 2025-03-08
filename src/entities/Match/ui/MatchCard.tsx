import { motion, AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import { MatchCardProps, MatchCardStatProps, MatchStatusProps } from '../model';
import { IconChevron } from '@/shared';
import Image from 'next/image';

const MatchCardStat: FC<MatchCardStatProps> = ({
  players,
  place,
  totalKills,
  points,
}) => {
  return (
    <div className='flex-1 w-full'>
      <div className='flex gap-2 mb-[8px] justify-between overflow-y'>
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
                className='font-inter text-white text-sm lg:text-base truncate'
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

export const MatchStatus: FC<MatchStatusProps> = ({ status }) => {
  const statusData = {
    Finished: {
      color: 'bg-[#EB0237]',
      text: 'Finished',
      width: 92,
    },
    Ongoing: {
      color: 'bg-[#43AD28]',
      text: 'Live',
      width: 92,
    },
    Scheduled: {
      color: 'bg-[#EB6402]',
      text: 'Match preparing',
      width: 112,
    },
  };
  return (
    <div
      className={`font-inter text-xs font-semibold ${statusData[status].color} py-[6px] text-white rounded-sm text-center`}
      style={{
        width: statusData[status].width,
      }}
    >
      {statusData[status].text}
    </div>
  );
};

export const MatchCard: FC<MatchCardProps> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className='bg-[#0B0E12] rounded-sm lg:py-[19px] lg:px-[16px] px-[5px] pt-[8px]  w-full'
      animate={{ height: isExpanded ? 'auto' : 'fit-content' }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <Image
            src='/assets/team.png'
            width={200}
            height={200}
            alt={match.homeTeam.name}
            className='w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]'
          />
          <div className='font-inter text-white font-semibold text-sm lg:text-base'>
            {match.homeTeam.name}
          </div>
        </div>

        <div className='flex flex-col items-center gap-[8px] flex-1'>
          <div className='font-inter text-xl font-semibold text-white'>
            {match.homeScore} : {match.awayScore}
          </div>
          <MatchStatus status={match.status} />
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center flex-row-reverse gap-3'>
            <Image
              src='/assets/team.png'
              width={200}
              height={200}
              alt={match.awayTeam.name}
              className='w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]'
            />
            <div className='font-inter text-white font-semibold text-sm lg:text-base'>
              {match.awayTeam.name}
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            className='cursor-pointer hidden lg:block'
          >
            <span className='text-white'>
              <IconChevron />
            </span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className='pt-[32px] pb-[12px'
          >
            <div className='flex flex-col 2xl:flex-row items-center relative lg:gap-[32px]'>
              <div className='w-full 2xl:flex-1'>
                <MatchCardStat
                  players={match.homeTeam.players}
                  place={match.homeTeam.place}
                  points={match.homeTeam.points}
                  totalKills={match.homeTeam.totalKills}
                />
              </div>

              <div className='flex items-center justify-center w-full 2xl:hidden py-[16px]'>
                <div className='relative w-full'>
                  <div className='absolute inset-x-0 top-1/2 border-t border-[#13181F] 2xl:hidden'></div>

                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center px-[10px] bg-[#0B0E12]'>
                      <span className='text-[#313A47] font-semibold text-sm'>
                        VS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full 2xl:flex-1'>
                <MatchCardStat
                  players={match.awayTeam.players}
                  place={match.awayTeam.place}
                  points={match.awayTeam.points}
                  totalKills={match.awayTeam.totalKills}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`flex py-[18px] justify-center w-full lg:hidden ${
          !isExpanded && '-rotate-180'
        }`}
      >
        <span className='text-white'>
          <IconChevron />
        </span>
      </div>
    </motion.div>
  );
};
