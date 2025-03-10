import { Button, DropList, IconError, IconRefresh } from '@/shared';
import { DropItem, DropSelectItem } from '@/entities';
import { FC, useState } from 'react';
import { dropListItems, NavBarProps } from '../model';
import { motion } from 'framer-motion';

export const NavBar: FC<NavBarProps> = ({
  onSelectItem,
  hasError,
  isLoading,
  refetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex lg:flex-nowrap flex-wrap lg:justify-between flex-wrap pt-[42px] pb-[20px]'>
      <div className='flex justify-center flex-wrap gap-[24px] w-full lg:w-auto lg:flex-nowrap'>
        <div className='font-tactic text-[32px] font-semibold italic'>
          Match Tracker
        </div>

        <DropList
          items={dropListItems}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          onSelectItem={(item) => onSelectItem(item.value)}
          renderSelectItem={(item) => (
            <DropSelectItem
              label={item.name}
              isOpen={isOpen}
            />
          )}
          renderItem={(item, isSelect) => (
            <DropItem
              label={item.name}
              isSelect={isSelect}
            />
          )}
          className='lg:w-[170px] w-full'
          classNameList='mt-[8px] rounded-sm'
        />
      </div>
      <div className='inline-flex w-full lg:w-auto lg:gap-[12px] lg:pt-0 pt-[10px]'>
        {hasError && (
          <div className='bg-[#0F1318] xl:flex hidden gap-[10px] rounded-sm items-center px-[24px]'>
            <IconError />
            <span className='font-inter text-lg'>
              Ошибка: не удалось загрузить информацию
            </span>
          </div>
        )}
        <Button
          className='w-full lg:w-auto'
          disabled={isLoading}
          onClick={refetch}
        >
          Обновить{' '}
          {isLoading ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <IconRefresh className='animate-spin' />
            </motion.div>
          ) : (
            <IconRefresh />
          )}
        </Button>
      </div>
    </div>
  );
};
