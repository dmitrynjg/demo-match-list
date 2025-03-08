export type DropListProps<T = unknown> = {
  items: T[];
  renderItem: (item: T, isSelect: boolean, index: number) => React.ReactNode;
  renderSelectItem: (item: T) => React.ReactNode;
  onSelectItem: (item: T) => void;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  className?: string;
  classNameList?: string;
};
