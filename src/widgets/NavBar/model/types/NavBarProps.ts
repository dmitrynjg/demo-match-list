import { StatusMatch  } from "@/entities";

export interface NavBarProps {
  onSelectItem: (status: StatusMatch | null) => void;
  isLoading: boolean;
  hasError?: boolean;
  refetch: VoidFunction;
}
