'use client';

import { useLayoutEffect, useState } from 'react';
import { BandsContainer } from './BandsContainer';
import { Navbar } from './Navbar';
import clsx from 'clsx';
import { Band } from './BandWidget';
import { Sidebar } from './Sidebar';

export const HomeContent = ({ bands }: { bands: Band[] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
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
      <Sidebar onSidebarClose={closeSidebar} sidebarOpen={sidebarOpen} />
    </div>
  );
};
