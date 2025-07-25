'use client';

import { useLayoutEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { BandsContainer } from './BandsContainer';
import { Navbar } from './Navbar';
import { Panel } from './Panel';
import clsx from 'clsx';
import { Band } from './BandWidget';
import { FlagIcon } from '@heroicons/react/24/outline';
import { Navigation } from './Navigation';
import { Search } from './Search';
import { Filters } from './Filters';

export const HomeContent = ({ bands }: { bands: Band[] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  useLayoutEffect(() => {
    setSidebarOpen(window.innerWidth >= 1300);
  }, []);

  return (
    <div
      className={clsx(
        'main-content p-8 grid gap-8',
        sidebarOpen ? 'grid-cols-4' : 'grid-cols-3',
      )}
    >
      <div
        className={clsx(
          'flex flex-col gap-8 col-span-3 transition-all duration-300 ease-in-out',
        )}
      >
        <header>
          <Navbar
            showMenuButton={!sidebarOpen}
            onMenuButtonClick={openSidebar}
          />
        </header>
        <main className="overflow-y-auto">
          <BandsContainer bands={bands} />
        </main>
      </div>
      <aside className={clsx(sidebarOpen ? 'visible' : 'hidden')}>
        <Panel className="px-7 py-9 text-md h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <Navigation className="in-sidebar" />
            <button
              className="cursor-pointer close-button-top"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-7 w-7 text-[var(--text-color)]" />
            </button>
          </div>
          <Filters className="in-sidebar mb-5 w-full" />
          <Search className="in-sidebar mb-5 w-full" />
          <div className="flex items-start justify-between">
            <h2 className="text-[var(--accent)] font-bold text-xl mb-2.5">
              Welcome to Lyric Music
            </h2>
            <button
              className="cursor-pointer close-button-bottom"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-7 w-7 text-[var(--text-color)]" />
            </button>
          </div>
          <p className="mb-8">
            We&apos;re thrilled to have you join us on this musical journey!
            Lyric Music is your gateway to a fresh and immersive way to enjoy
            the bands and artists you love. Whether you&apos;re searching for
            your all-time favorite tracks, exploring curated playlists crafted
            to fit every mood, or discovering new songs that will soon become
            your go-to anthems, Lyric Music is here to elevate your listening
            experience.
          </p>
          <p className="mb-8">
            Imagine having the perfect soundtrack for every moment of your life,
            from energizing workouts to peaceful evenings under the stars. With
            an intuitive interface designed to make finding music effortless and
            enjoyable, you&apos;ll spend less time searching and more time
            grooving. Best of all, it&apos;s completely free—because we believe
            that great music should be accessible to everyone.
          </p>
          <p className="mb-8">
            At Lyric Music, we&apos;re passionate about creating a community
            where music lovers like you can explore, connect, and celebrate the
            power of sound. So dive in, press play, and let the music move you.
            Welcome to your new favorite way to listen.
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
    </div>
  );
};
