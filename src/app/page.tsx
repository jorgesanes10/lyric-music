import { fetchBands } from '@/actions/bands';
import { BandsContainer } from '@/ui/components/BandsContainer';
import { Band } from '@/ui/components/BandWidget';
import { HomeContent } from '@/ui/components/HomeContent';
import { Navbar } from '@/ui/components/Navbar';
import { Panel } from '@/ui/components/Panel';
import { XMarkIcon } from '@heroicons/react/16/solid';

export default async function Home(props: {
  searchParams?: Promise<{ genre?: string; query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre || 'all';
  const query = searchParams?.query || '';

  const bands = (await fetchBands({ genre, query })) as Band[];

  return <HomeContent bands={bands} />;
}
