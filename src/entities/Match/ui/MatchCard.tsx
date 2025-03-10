import { motion, AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import { MatchCardProps } from '../model';
import { IconChevron } from '@/shared';
import Image from 'next/image';
import { MatchCardStat } from './MatchCardStat';
import { MatchStatus } from './MatchStatus';

export const MatchCard: FC<MatchCardProps> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className='bg-[#0B0E12] rounded-sm lg:py-[19px] lg:px-[16px] px-[5px] pt-[8px]  w-full'
      animate={{ height: isExpanded ? 'auto' : 'fit-content' }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className='flex items-center justify-between gap-[25px]'>
        <div className='flex items-center gap-[6px] lg:gap-[18px]'>
          <Image
            src='/assets/team.png'
            width={200}
            height={200}
            alt={match.homeTeam.name}
            className='w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]'
          />
          <div className='font-inter text-white font-semibold text-sm lg:text-base tracking-normal'>
            {match.homeTeam.name}
          </div>
        </div>

        <div className='flex flex-col items-center gap-[8px]'>
          <div className='font-inter text-xl font-semibold text-white'>
            {match.homeScore} : {match.awayScore}
          </div>
          <MatchStatus status={match.status} />
        </div>

        <div className='flex items-center gap-[12px]'>
          <div className='flex items-center flex-row-reverse gap-[6px] lg:gap-[18px]'>
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
            <div className='flex flex-col lg:flex-row items-center relative lg:gap-[32px]'>
              <div className='w-full lg:flex-1'>
                <MatchCardStat
                  players={match.homeTeam.players}
                  place={match.homeTeam.place}
                  points={match.homeTeam.points}
                  totalKills={match.homeTeam.totalKills}
                />
              </div>

              <div className='flex items-center justify-center w-full lg:hidden py-[16px]'>
                <div className='relative w-full'>
                  <div className='absolute inset-x-0 top-1/2 border-t border-[#13181F] lg:hidden'></div>

                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center px-[10px] bg-[#0B0E12]'>
                      <span className='text-[#313A47] font-semibold text-sm'>
                        VS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full lg:flex-1'>
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
