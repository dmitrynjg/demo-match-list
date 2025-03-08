import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DropListProps } from '../model';

export const DropList = <Item,>({
  items,
  renderItem,
  renderSelectItem,
  onSelectItem,
  isOpen,
  className,
  classNameList,
  onOpenChange,
}: DropListProps<Item>) => {
  const [selectItem, setSelectItem] = useState<{
    item: Item;
    index: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const onToggleOpen = () => {
    onOpenChange?.(!isOpen);
  };

  const onCloseList = () => {
    onOpenChange?.(false);
  };

  useEffect(() => {
    if (items) {
      setSelectItem(null);
    }
  }, [setSelectItem, items]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div
        onClick={onToggleOpen}
        className='cursor-pointer'
      >
        {selectItem?.item ? (
          renderSelectItem(selectItem.item)
        ) : items?.length > 0 ? (
          renderSelectItem(items[0])
        ) : (
          <div>Ничего не найдено</div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 z-50 ${classNameList}`}
          >
            <div className='overflow-y-auto max-h-[204px]'>
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onSelectItem(item);
                    setSelectItem({ item, index });
                    onCloseList();
                  }}
                  className='hover:cursor-pointer'
                >
                  {renderItem(
                    item,
                    selectItem ? index === selectItem?.index : index === 0,
                    index
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

DropList.displayName = 'DropList';
