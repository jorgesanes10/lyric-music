import clsx from 'clsx';
import { Panel } from './Panel';
import { Navigation } from './Navigation';
import { FlagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Filters } from './Filters';
import { Search } from './Search';

const CloseButton = ({
  onClick,
  top,
}: {
  onClick: () => void;
  top?: boolean;
}) => {
  return (
    <button
      className={`cursor-pointer close-button-${top ? 'top' : 'bottom'}`}
      onClick={onClick}
      data-testid={top ? 'close-button-top' : 'close-button-bottom'}
    >
      <XMarkIcon className="h-7 w-7 text-[var(--text-color)]" />
    </button>
  );
};

export const Sidebar = ({
  sidebarOpen,
  onSidebarClose,
}: {
  sidebarOpen: boolean;
  onSidebarClose: () => void;
}) => {
  return (
    <aside className={clsx(sidebarOpen ? 'visible' : 'hidden')}>
      <Panel className="px-7 py-9 text-md h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <Navigation className="in-sidebar" />
          <CloseButton onClick={onSidebarClose} top />
        </div>
        <Filters className="in-sidebar mb-5 w-full" />
        <Search className="in-sidebar mb-5 w-full" />
        <div className="flex items-start justify-between">
          <h2 className="text-[var(--accent)] font-bold text-xl mb-2.5">
            Welcome to Lyric Music
          </h2>
          <CloseButton onClick={onSidebarClose} />
        </div>
        <p className="mb-8">
          We&apos;re thrilled to have you join us on this musical journey! Lyric
          Music is your gateway to a fresh and immersive way to enjoy the bands
          and artists you love. Whether you&apos;re searching for your all-time
          favorite tracks, exploring curated playlists crafted to fit every
          mood, or discovering new songs that will soon become your go-to
          anthems, Lyric Music is here to elevate your listening experience.
        </p>
        <p className="mb-8">
          Imagine having the perfect soundtrack for every moment of your life,
          from energizing workouts to peaceful evenings under the stars. With an
          intuitive interface designed to make finding music effortless and
          enjoyable, you&apos;ll spend less time searching and more time
          grooving. Best of all, it&apos;s completely free—because we believe
          that great music should be accessible to everyone.
        </p>
        <p className="mb-8">
          At Lyric Music, we&apos;re passionate about creating a community where
          music lovers like you can explore, connect, and celebrate the power of
          sound. So dive in, press play, and let the music move you. Welcome to
          your new favorite way to listen.
        </p>
        <div className="bg-[var(--background)] p-5 flex gap-5 items-center rounded-[10px]">
          <div className="relative ml-6">
            <FlagIcon className="h-10 w-10 text-[var(--accent)] rotate-15" />
            <FlagIcon className="h-10 w-10 text-[var(--accent)] -rotate-15 rotate-y-180 absolute top-0 right-8" />
          </div>
          <div>
            <h3 className="text-[var(--accent)] font-bold text-[19px]">
              COMING SOON
            </h3>
            <p className="text-[var(--text-dark)] text-[13px]">
              Check out whats new for 2025 from the Lyric team.
            </p>
          </div>
        </div>
      </Panel>
    </aside>
  );
};
