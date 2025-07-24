'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const Search = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={clsx('search relative w-[200px]', className)}>
      <MagnifyingGlassIcon className="h-4 w-4 text-[#484848] absolute left-[11px] top-[10px]" />
      <input
        type="text"
        className="bg-[#181818] rounded-[19px] pl-9 pr-4 py-[6px] w-full"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
