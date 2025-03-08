import { MatchType } from "@/entities";

export interface MatchFromServer
  extends Omit<MatchType, 'homeTeam' | 'awayTeam'> {
  homeTeam: Omit<MatchType['homeTeam'], 'totalKills'> & {
    total_kills: MatchType['homeTeam']['totalKills'];
  };
  awayTeam: Omit<MatchType['awayTeam'], 'totalKills'> & {
    total_kills: MatchType['awayTeam']['totalKills'];
  };
}

export interface UseGetMatchListResponse {
  ok: boolean;
  data: {
    matches: MatchFromServer[];
  };
}