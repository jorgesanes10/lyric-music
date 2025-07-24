'use client';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Filters = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (genre: string) => {
    const params = new URLSearchParams(searchParams);

    if (genre) {
      params.set('genre', genre.toLowerCase());
    } else {
      params.delete('genre');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const params = new URLSearchParams(searchParams);

  const currentGenre = params.get('genre') || 'all';

  return (
    <div className={clsx('nav-filters flex gap-2.5 z-10', className)}>
      {['All', 'Country', 'Rock', 'Pop'].map((genre) => (
        <button
          onClick={() => {
            handleClick(genre);
          }}
          key={`${genre}-filter`}
          className={clsx(
            'px-5 py-[7px] bg-[#181818] rounded-[19px] text-[#cbcbcb] cursor-pointer  border border-white transition-all duration-300 ease-in-out',
            {
              'bg-[var(--accent)]': currentGenre === genre.toLowerCase(),
            },
          )}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
