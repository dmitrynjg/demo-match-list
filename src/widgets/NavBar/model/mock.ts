import { StatusMatch } from "@/entities";

export const dropListItems: {
  id: number;
  name: string;
  value: StatusMatch | null;
}[] = [
  {
    id: 1,
    name: 'Все статусы',
    value: null,
  },
  {
    id: 2,
    name: 'Live',
    value: 'Ongoing',
  },
  {
    id: 3,
    name: 'Finished',
    value: 'Finished',
  },
  {
    id: 4,
    name: 'Match preparing',
    value: 'Scheduled',
  },
];
