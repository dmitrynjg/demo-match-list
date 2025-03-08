import { MatchType, Player, StatusMatch, Team } from './Match';

export interface MatchCardProps {
  match: MatchType;
}

export interface MatchCardStatProps {
  players: Player[];
  totalKills: Team['totalKills'];
  points: Team['points'];
  place: Team['place'];
}

export interface MatchStatusProps {
    status: StatusMatch;
}