import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(`navigation flex gap-4 items-center`, className)}>
      <BellIcon className="h-9 w-9 text-[var(--text-color)]" />
      <CogIcon className="h-9 w-9 text-[var(--text-color)]" />
      <ChatBubbleOvalLeftIcon className="h-9 w-9 text-[var(--text-color)]" />
    </div>
  );
};
