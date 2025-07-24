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
  return (
    <Panel>
      <nav className="flex items-center gap-8 pr-5 nowrap">
        <Link href="/" className="relative">
          <Image
            src="/images/logo.png"
            alt="Lyric Music"
            width={163}
            height={105}
            className="min-w-[163px]"
          />
          <span className="text-[9px] tracking-[3px] font-bold text-[#33e1a5] absolute right-[22px] bottom-[26px]">
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
            <Bars3Icon className="h-9 w-9 text-[#cbcbcb]" />
          </button>
        </div>
      </nav>
    </Panel>
  );
};
