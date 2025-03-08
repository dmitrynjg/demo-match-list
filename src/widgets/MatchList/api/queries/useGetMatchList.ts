import { useQuery } from 'react-query';
import { UseGetMatchListResponse } from '../../model';

export const mockMatchData: UseGetMatchListResponse = {
  ok: true,
  data: {
    matches: [
      {
        time: '2024-03-20T15:00:00',
        title: 'CS2 Championship Match',
        homeScore: 16,
        awayScore: 14,
        status: 'Finished',
        homeTeam: {
          name: 'Team FTOYD',
          players: [
            { username: 'Player1', kills: 25 },
            { username: 'Player2', kills: 18 },
            { username: 'Player3', kills: 22 },
            { username: 'Player4', kills: 20 },
            { username: 'Player5', kills: 16 },
          ],
          points: 3,
          place: 1,
          total_kills: 101,
        },
        awayTeam: {
          name: 'Team Warriors',
          players: [
            { username: 'Warrior1', kills: 19 },
            { username: 'Warrior2', kills: 23 },
            { username: 'Warrior3', kills: 17 },
            { username: 'Warrior4', kills: 15 },
            { username: 'Warrior5', kills: 21 },
          ],
          points: 1,
          place: 2,
          total_kills: 95,
        },
      },
      {
        time: '2024-03-21T18:00:00',
        title: 'CS2 Qualifiers',
        homeScore: 0,
        awayScore: 0,
        status: 'Scheduled',
        homeTeam: {
          name: 'Team Alpha',
          players: [
            { username: 'Alpha1', kills: 0 },
            { username: 'Alpha2', kills: 0 },
            { username: 'Alpha3', kills: 0 },
            { username: 'Alpha4', kills: 0 },
            { username: 'Alpha5', kills: 0 },
          ],
          points: 0,
          place: 0,
          total_kills: 0,
        },
        awayTeam: {
          name: 'Team Beta',
          players: [
            { username: 'Beta1', kills: 0 },
            { username: 'Beta2', kills: 0 },
            { username: 'Beta3', kills: 0 },
            { username: 'Beta4', kills: 0 },
            { username: 'Beta5', kills: 0 },
          ],
          points: 0,
          place: 0,
          total_kills: 0,
        },
      },
    ],
  },
};

export const useGetMatchList = () => {
  return useQuery<UseGetMatchListResponse>({
    queryKey: 'matchList',
    queryFn: async () => {
        const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
        return await response.json();
      return mockMatchData;
    },
  });
};
