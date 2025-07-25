import Image from 'next/image';
import Link from 'next/link';
import { Panel } from './Panel';
import { Filters } from './Filters';
import { Search } from './Search';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { Navigation } from './Navigation';
import clsx from 'clsx';

export const Navbar = ({
  showMenuButton,
  onMenuButtonClick,
}: {
  showMenuButton?: boolean;
  onMenuButtonClick?: () => void;
}) => {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = darkModeQuery.matches;

  return (
    <Panel>
      <nav className="flex items-center gap-8 pr-5 nowrap">
        <Link href="/" className="relative">
          <Image
            src={isDarkMode ? '/images/logo.png' : '/images/logo-black.png'}
            alt="Lyric Music"
            width={163}
            height={105}
            className="min-w-[163px]"
          />
          <span className="text-[9px] tracking-[3px] font-bold text-[var(--accent)] absolute right-[22px] bottom-[26px]">
            MUSIC
          </span>
        </Link>
        <div className="flex grow items-center gap-[68px]">
          <Filters className="in-navbar" />
          <Search className="in-navbar" />
        </div>
        <div className="flex gap-4">
          <Navigation className="in-navbar" />
          <button
            className={clsx(
              'menu-button cursor-pointer',
              showMenuButton && 'show-menu-button',
            )}
            onClick={onMenuButtonClick}
          >
            <Bars3Icon className="h-9 w-9 text-[var(--text-color)]" />
          </button>
        </div>
      </nav>
    </Panel>
  );
};
