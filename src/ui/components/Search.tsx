'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const Search = ({ className }: { className?: string }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const query = searchParams.get('query');

  useEffect(() => {
    setSearchTerm(query || '');
  }, [query]);

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
      <MagnifyingGlassIcon className="h-4 w-4 text-[var(--text-darker)] absolute left-[11px] top-[10px]" />
      <input
        type="text"
        className="bg-[var(--background)] rounded-[19px] pl-9 pr-4 py-[6px] w-full"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        value={searchTerm}
      />
    </div>
  );
};
