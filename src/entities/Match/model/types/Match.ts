export type StatusMatch = 'Scheduled' | 'Ongoing' | 'Finished';

export interface MatchType {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: StatusMatch;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  totalKills: number;
}

export interface Player {
  username: string;
  kills: number;
}