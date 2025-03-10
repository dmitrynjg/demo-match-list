import { FC } from 'react';
import { MatchStatusProps } from '../model';

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
