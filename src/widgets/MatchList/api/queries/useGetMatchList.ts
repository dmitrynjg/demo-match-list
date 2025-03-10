import { useQuery } from 'react-query';
import { UseGetMatchListResponse } from '../../model';

export const useGetMatchList = () => {
  return useQuery<UseGetMatchListResponse>({
    queryKey: 'matchList',
    queryFn: async () => {
        const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
        return await response.json();
    },
  });
};
